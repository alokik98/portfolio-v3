const Footer = () => {
    return (
        <div className="mt-5">
            <div className="flex mt-24 justify-between sm:flex-col">
                <div className="w-1/2">
                    <header className="text-4xl"></header>
                </div>
                <div className="text-justify mb-5 w-4/5 sm:w-full flex flex-col justify-between text-xl">
                    <p>
                        Loosely designed in Figma and coded in Visual Studio Code by yours truly. Built with React and Tailwind CSS, deployed with Vercel. All text is set in Montserrat typeface.
                    </p>
                    <p className="mt-2">
                        Designed is inspired by Brittany Chiang, Ian Dunkerley and Adeola Adeoti.
                    </p>
                </div>
            </div>
            <hr />
            <div className="mt-10 text-center">
                <p>Copyright &#169; Alokik Kanchan &#64; <b>2023</b></p>
            </div>
        </div>
    )
}

export default Footer