import { useEffect, useState } from "react"


export default function History() {
  const [history, setHistory] = useState([])

  useEffect(() => {
    fetch("http://localhost:8000/historia-powiekszen")
      .then(res => res.json())
      .then(historia => {
        setHistory(historia)
      })
  }, [])

  return (
    <div id="historyContainer">
      {
        history.map((onceIncrease, idx) => (
          <div key={idx}>
            Dyktator: {onceIncrease.dictator} zwiększył Niemce o: {onceIncrease.size}
          </div>
        ))
      }
    </div>
  )
}
