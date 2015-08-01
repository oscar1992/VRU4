#pragma strict
var dir:Vector3;
var brujula:float;
var velocidad:float=0.5;
var a:float=0;
var b:float=0;
function Start () {
 Input.compass.enabled=true;
}

function Update () {
	dir=Input.acceleration;
	brujula=Mathf.Round(Input.compass.magneticHeading);
	
	
	var blanco=Quaternion.Euler((-getAccelez()*85),brujula,(-getAccelex()*85));
    transform.rotation=Quaternion.Slerp(transform.rotation,blanco,velocidad); 
	
}
function getAccelex(){
 dir.x=Mathf.Round (dir.x * 1000) / 1000; 
 return dir.x;
}
function getAcceley(){
 dir.y=Mathf.Round (dir.y * 1000) / 1000; 
 return dir.y;
}
function getAccelez(){
 dir.z=Mathf.Round (dir.z * 1000) / 1000;
 return dir.z;
}

function OnGUI(){         
   /* GUI.Label(Rect(0,50,200,25), "EN Z"+getAccelez());
    GUI.Label(Rect(0,70,200,25), "EN X"+getAccelex());
    GUI.Label(Rect(0,90,200,25), "EN Y"+getAcceley());
    GUI.Label(Rect(0,110,200,25), "Brujula: "+brujula);   */
}