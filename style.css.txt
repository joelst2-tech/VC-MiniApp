body {
  font-family: Arial, sans-serif;
  padding: 30px;
}

input {
  padding: 8px;
  margin-top: 10px;
  width: 300px;
}

button {
  padding: 10px 20px;
  background-color: #0070f3;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
}

button:disabled {
  background-color: #cccccc;
  cursor: not-allowed;
}

button:hover:not(:disabled) {
  background-color: #0059c1;
}

.hidden {
  display: none;
}

#response {
  margin-top: 15px;
  font-weight: bold;
}
