/* style.css */

body{
    margin:0;
    padding:0;
    background:#000;
    overflow:hidden;
    font-family:Arial,sans-serif;
    text-align:center;
    color:white;
}

h1{
    margin-top:15px;
    font-size:40px;
    color:#d580ff;
}

#game{
    position:relative;
    width:100%;
    height:420px;
    margin-top:20px;
    overflow:hidden;
    border-top:3px solid #b84dff;
    border-bottom:3px solid #b84dff;
}

/* GIRL SIZE */
#girl{
    position:absolute;
    width:85px;
    height:85px;
    left:40px;
    bottom:20px;
    border-radius:25px;
    border:4px solid white;
    object-fit:cover;
    background:#111;
}

/* SMALLER MOM SIZE */
#mom{
    position:absolute;
    width:55px;
    height:55px;
    right:-120px;
    bottom:20px;
    border-radius:18px;
    border:3px solid #ff66ff;
    object-fit:cover;
    background:#111;
}

#score{
    margin-top:25px;
    font-size:35px;
    font-weight:bold;
}

#jumpBtn{
    margin-top:25px;
    padding:18px 60px;
    border:none;
    border-radius:25px;
    background:#00ff99;
    color:black;
    font-size:28px;
    font-weight:bold;
}

/* POPUP */
.victory-popup{
    position:fixed;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background:rgba(0,0,0,0.95);
    display:flex;
    justify-content:center;
    align-items:center;
    z-index:999;
}

.victory-card{
    width:85%;
    max-width:350px;
    background:#111;
    border:3px solid #b84dff;
    border-radius:35px;
    padding:30px;
    text-align:center;
}

.winner-photo{
    width:140px;
    height:140px;
    border-radius:25px;
    border:4px solid white;
    object-fit:cover;
    background:#222;
    margin-bottom:20px;
}

.victory-card h2{
    font-size:32px;
    margin:10px 0;
}

.victory-card p{
    font-size:22px;
    color:#d580ff;
}

#restartBtn{
    margin-top:20px;
    padding:15px 35px;
    border:none;
    border-radius:20px;
    background:#00ff99;
    color:black;
    font-size:22px;
    font-weight:bold;
}
