sequenceDiagram
	participant navegador
	participant servidor

	navegador-->servidor: GET https://studies.cs.helsinki.fi/exampleapp/main.css
	servidor-->navegador: CSS file

