'use client'
import { useState } from "react"
export default function Card({ data, onCompleted }) {
    const [index, setIndex] = useState(0);
    const [result, setResult] = useState([]);
    const optionSelectedHandle = function (selected) {
        setResult([...result, selected]);
        index + 1 === data.length ? onCompleted([...result, selected]) : setIndex(index + 1);
    }
    const Options = data[index].options.map(option => {
        return (<li key={option.id} onClick={() => optionSelectedHandle(option.id)}>{option.title}</li>)
    })
    return (
        <section className="question">
            <div className="progress"><span style={{ width: (100 * index / data.length) + "%" }}></span></div>
            <div className="content">
                <h1>{data[index].title}</h1>
                <ul>{Options}</ul>
            </div>
        </section>
    )
}