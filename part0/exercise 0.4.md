sequenceDiagram
	participant navegador
	participant servidor

	navegador-->servidor: GET  https://studies.cs.helsinki.fi/exampleapp/notes
	activate server
	servidor-->navegador: HTML document
	deactivate server
	navegador-->servidor: POST https://studies.cs.helsinki.fi/exampleapp/new_note
	activate server
	servidor-->navegador: HTTP 302
	deactivate server
	navegador-->servidor: GET  https://studies.cs.helsinki.fi/exampleapp/main.css
	activate server
	servidor-->navegador: CSS file
	deactivate server
	navegador-->servidor: GET  https://studies.cs.helsinki.fi/exampleapp/main.js
	activate server
	servidor-->navegador: JavaScript file
	deactivate server
	navegador-->servidor: GET  https://studies.cs.helsinki.fi/exampleapp/data.json
	activate server
	servidor-->navegador: [{ "content": "This is a test", "date": "2025-3-18" }, ... ]
	deactivate server

