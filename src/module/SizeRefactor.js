export const getResizeEventListener = (standardWidth, standardHeight) =>{

    return () =>{
        const root = document.querySelector("#root");
        const app = document.querySelector("#App");

        app.style.width = `${standardWidth}px`;
        app.style.height = `${standardHeight}px`;

        let width = root.clientWidth;
        let height = width * (standardWidth / standardHeight);

        app.style.zoom = height / standardHeight;

        if(height > root.clientHeight){
            height = root.clientHeight;
            width = height * (standardWidth / standardHeight);

            app.style.zoom = width / standardWidth;
            console.log("qwe")
        }
        console.log(app.style.zoom);
    }
}