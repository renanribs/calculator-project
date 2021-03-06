* {
  box-sizing: border-box;
  font-family: "Roboto" sans-serif;
  font-weight: bold;
  margin: 0;
  padding: 0;
}

body {
  background: url("background.gif");
}

.grid-container {
  padding: 40px;
  display: grid;
  justify-content: center;
  align-content: center;
  min-height: 100vh;
  grid-template-columns: repeat(4, 100px);
  grid-template-rows: minmax(120px, auto) repeat(5, 100px);
  border-radius: 8px;
  border: none;
}

.grid-container > button {
  cursor: pointer;
  font-size: 2rem;
  border: 5px solid #111;
  outline: none;
  background-color: #0a0f0c;
  color: antiquewhite;
  border-radius: 20px;
  transition: all 0.5s;
  cursor: pointer;
  box-shadow: 10px 8px 8px rgb(46, 46, 46);
}

.grid-container > button:hover {
  background-color: rgb(158, 156, 156);
  color: rgb(0, 0, 0);
}

#sup {
  border-radius: 0 0 8px 8px;
}

.grid-container > .operator {
  background: #6e3657;
}

.span-two {
  grid-column: span 2;
}

.grid-container > .output {
  grid-column: 1 / -1;
  background: #111;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-around;
  padding: 10px;
  word-wrap: break-word;
  word-break: break-all;
  border-radius: 8px 8px 0 0;
}

.grid-container > .output > .previous-operand {
  color: rgba(255, 255, 255, 0.75);
  font-size: 1.5rem;
}

.grid-container > .output > .current-operand {
  color: white;
  font-size: 2rem;
}
