import { useState } from "react"


export default function Form() {
  const [formState, setFormState] = useState({})

  const setDictator = (e) => {
    setFormState((actual) => {
      console.log({ ...actual, dictator: e.target.value })
      return { ...actual, dictator: e.target.value }
    })
  }

  const setGermanySize = (e) => {
    setFormState(actual => {
      console.log({ ...actual, size: e.target.value })
      return { ...actual, size: e.target.value }
    })
  }

  const sendFormValues = (e) => {
    e.preventDefault()
    if (formState.dictator != undefined && formState.size != undefined) {
      alert(`Dyktator ${formState.dictator} zmienił wielkość Niemców o: ${formState.size} `)
      fetch("http://localhost:8000/powieksz-niemce", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          dictator: formState.dictator,
          size: formState.size
        })
      })
    }
    else {
      alert("Musisz być dyktatorem, i wybrać rozmiar swoich Niemców")
    }
  }

  return (
    <div id="formContainer">
      <form>
        <input type="text" placeholder="nazwisko dyktatora" onChange={setDictator} />
        <label>100 000 km2
          <input type="radio" id="1" value="100 000 km2" onClick={setGermanySize} />
        </label>
        <label> 200 000 km2
          <input type="radio" id='2' value="200 000 km2" onClick={setGermanySize} />
        </label>
        <label> 300 000 km2
          <input type="radio" id="3" value="300 000 km2" onClick={setGermanySize} />
        </label>
        <label> 400 000 km2 (Ostrożnie 🍆🍆🍆💦💦💦)
          <input type="radio" id="4" value="400 000 km2" onClick={setGermanySize} />
        </label>

        <input type="submit" value="Powiększ" onClick={sendFormValues} />
      </form>
    </div>
  )
}
