import content from "./content"
export default function Page({params}) {
    const { type } = params;
    return (
        <div className="report">
            <div className="avatar" style={{backgroundImage:`url(/${type}.jpeg)`}}></div>
            <div className="summery">{content[type].summery}</div>
        </div>
    )
}