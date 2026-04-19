import './rodape.css'

const Rodape = () => {
    return (<footer className="footer">
        <section>
            <ul>
                <li>
                    <a href="https://github.com/vfluyu/P-P/" target="_blank">
                        <img className='img' src="/imgs/github.png" alt="My GitHub" />
                    </a>
                </li>
                <li>
                    <a href="twitter.com" target="_blank">
                        <img className='img' src="/imgs/tw.png" alt="" />
                    </a>
                </li>
                <li>
                    <a href="instagram.com" target="_blank">
                        <img className='img' src="/imgs/ig.png" alt="" />
                    </a>
                </li>
            </ul>
        </section>
        <section>
            <img className='img2' src="/imgs/logo.png" alt="" />
        </section>
        <section>
            <p>
                Desenvolvido por Vítor Dallabona.
            </p>
        </section>
    </footer>)
}

export default Rodape