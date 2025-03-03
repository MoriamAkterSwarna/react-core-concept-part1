// Code for Video 38-8

export default function Singer({singer}){
    console.log(singer);


    return (
        <div className="singer">
            <h3>Singer: {singer.name}</h3>
            <p>Age:{singer.age} </p>
        </div>
    );
}