import PocketBase from "pocketbase";

const pb = new PocketBase("http://127.0.0.1:8090");
let nextLocalId = 0;
let notes = [];

//LOCAL

export function newNote(title, content = "") {
  const note = {
    id: nextLocalId++,
    title: title,
    content: content,
    synced: false,
  };
  notes.push(note);
}

export function editNote(noteId, newTitle, newContent) {
  const note = notes.find((n) => n.id === noteId);
  if (note) {
    note.title = newTitle;
    if (newContent !== undefined) {
      note.content = newContent;
    }
    note.synced = false;
  }
  return note;
}

//DB

export async function fetchNotes() {
  const dbNotes = await pb.collection("Notes").getFullList({});
  notes = dbNotes.map((note) => ({
    ...note,
    synced: true,
  }));
}

export async function pushNotesToDatabase() {
  const unsyncedNotes = notes.filter((note) => !note.synced);
  try {
    for (const note of unsyncedNotes) {
      const record = await pb.collection("Notes").create({
        title: note.title,
        content: note.content,
      });

      note.id = record.id;
      note.synced = true;
    }
  } catch (e) {
    console.error("Sync failed: ", e);
  }
}

export { notes };
