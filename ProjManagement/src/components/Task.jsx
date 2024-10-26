export default function Task({ name, ...props }) {
    return(
        <>
            <h2>{name}</h2>
            <button>Clear</button>
        </>
    )
}