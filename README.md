## Digital Building Data Integration with 3D Building Models
This small development initially handled during AEC Hackathon in 2015
Building Information Model files (.ifc format) are converted to .obj to render in the browser
The obj+mtl loader libraries of Three.js are used to generate navigable and walk-in models.
Similarly, additional features (change color, transparency, etc.) were added with Three js

The implementation connects the Neo4j graph database for the interactive visualization.
The digital building data is also retrieved from .ifc files are pushed to Neo4j via a converter written by the hack team.


Due to fast development, server side of the implementation is ignored and the localhost port is hardcoded.
To start the application Python simple http server is used.
`python SimpleHTTPServer 8085`
