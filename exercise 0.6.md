sequenceDiagram
	participant navegador
	participant servidor

	navegador-->servidor: GET https://studies.cs.helsinki.fi/exampleapp/main.css
	servidor-->navegador: CSS file
	navegador-->servidor: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
	servidor-->navegador: 201 Created


