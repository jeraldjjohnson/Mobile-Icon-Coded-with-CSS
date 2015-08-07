<h1>Mobile Icon Coded with CSS & SASS</h1>
Mobile icon, aka the hamburger icon, completely created with css...well the REAL css being SASS. No images or other visual assets used to create this project. 

In this project there are jade files and html. If you don't use Jade, then tsk tsk tsk. You're missing out. There are regular CSS files and SASS files. 

Layout is created with css Flexbox property. 

Cross-browswer compatible with IE, FF, Chrome, and Safari. Because IE 9 & earlier do not support Flexbox, the layout breaks in those versions. You will need to create fallbacks for those versions. 

<h2>A little info about the project setup</h2>
Main folder has:
<ul>

<li>Html file</li>
<li>Assets folder</li>
<ul>
<li>CSS folder is divided into a few different folders with their own css files. Each css file is imported by the main styles.css file. This modular building approach creates a SINGLE http request, which helps the server from being slow.</li>
</ul>

</ul>

To view a live demo of this, you can visit my code pen
http://codepen.io/jeraldjohnson/full/vOvwwq/
