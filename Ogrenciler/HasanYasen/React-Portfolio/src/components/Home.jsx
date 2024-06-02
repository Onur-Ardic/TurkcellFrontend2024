function Home() {
    return (
        <>
            <h1>Work<br /> in Progress</h1>
            <div className="wavy-shape"></div>
            <p className="coming-soon">COMING SOON</p>
            <div className="last-div flex jc-sbetween ai-center">
                <div>
                    <img src="https://demo.cocobasic.com/seppo-html/demo-5/images/arrow.png" alt="arrow" />
                </div>
                <div>
                    <input type="text" placeholder="Enter your email address to contact me..." />
                </div>
                <div>
                    <button>SEND</button>
                </div>
            </div>
        </>
    )
}

export default Home