import "./notes.js";
import "./style.css";
import { fetchNotes, newNote, notes, pushNotesToDatabase } from "./notes.js";

await fetchNotes();
newNote("MASSIMO", "HU");
await pushNotesToDatabase();
console.log(notes);
