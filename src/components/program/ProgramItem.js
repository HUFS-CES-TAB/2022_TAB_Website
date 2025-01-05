export default function ProgramItem({ imgSrc, title }) {
    return (
        <div className="shadow-xl rounded-b-3xl hover:scale-105 transition-all">
            <div className="h-72 flex justify-center">
                <img alt="programImg" src={imgSrc} className="rounded-t-3xl object-cover h-72" />
            </div>
            <div className="p-2 rounded-b-3xl pl-4">
                <span>
                    {title}
                </span>
            </div>
        </div>
    )
}