{
    "eye": [ 0 , 0, 6 ],
    "lookat": [0, 0, 3 ],
    "up": [0,1,0],
    "fov_angle": 99,
    "width": 329,
    "height": 329,
    "MaxDepth": 4,
    "SunLocation":[-900,900,0],
    "OnlyAmbient":0,
    "spheres": [
    {
        "type": "sphere",
        "center": [4,0,4],
        "radius": 2,
        "ambient": [0.09, 0.99,0.09],
        "IsMirror":0
    }
    ],
    "billboards": [
	{
    	"type":"billboards",
        "UpperLeft": [ -8, 8 , -1], 
        "LowerLeft": [-8 , -8, -1], 
        "UpperRight": [8 , 8, -1],
        "filename": "yael.ppm",
        "IsMirror":0
    }, 
	{
    	"type":"billboards",
        "UpperLeft": [ -6, 3 , 0], 
        "LowerLeft": [-6 , 1, 0], 
        "UpperRight": [-4 , 3, 0],
        "filename": "chessboard.ppm",
        "IsMirror":0
    }, 
	{
    	"type":"billboards",
        "UpperLeft": [ 4, 3 , 0], 
        "LowerLeft": [4 , 1, 0], 
        "UpperRight": [6 , 3, 0],
        "filename": "chessboard.ppm",
        "IsMirror":0
    }, 
	{
    	"type":"billboards",
        "UpperLeft": [ 5, 5 , 7], 
        "LowerLeft": [5 , -5, 7], 
        "UpperRight": [-5,5,7],
        "filename": "camera.ppm",
        "IsMirror":0
    },
	{
    	"type":"billboards",
        "UpperLeft": [ 5, 5 , 7], 
        "LowerLeft": [5 , -5, 7], 
        "UpperRight": [-5,5,7],
        "filename": "chessboard.ppm",
        "IsMirror":1
    },
	{
    	"type":"billboards",
        "UpperLeft": [ -3, 3 , 0], 
        "LowerLeft": [-3 , -3, 0], 
        "UpperRight": [3, 3, 0],
        "filename": "chessboard.ppm",
        "IsMirror":1
    }]
}
