import React from 'react'
import './about.css'

import logo from '../../static/images/logo.png'

class About extends React.Component {


    render() {
        return (
            <div className="about"  id="about">
                <h2>CONHEÇA MAIS SOBRE A PBG</h2>
                <div className="about-info">
                    <div className="about-text">
                    <img className="about-logo" src={logo} alt="logo"/>
                        <p>Entender para atender</p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed dolor fringilla tellus
                            pharetra convallis eu id mauris. Suspendisse potenti. Ut non nibh eget lorem congue tristique
                            sed eu felis. Nam dignissim convallis tortor. Nunc venenatis est eu ex fermentum, non commodo
                            velit dictum. Duis hendrerit, velit dapibus ullamcorper euismod, ex ante laoreet urna, vitae
                        </p>
                     </div>
                    <div className="about-diff">
                        <div>
                            <h3>VANTAGENS</h3>
                            <div className="AdvantagesIconSet">
                                <svg id="Layer_1" enable-background="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><g><path d="m504.5 49.692h-233.736v-42.192c0-4.142-3.357-7.5-7.5-7.5h-46.793c-4.142 0-7.5 3.358-7.5 7.5v42.192h-91.782c-4.142 0-7.5 3.358-7.5 7.5v64.482c-4.95 2.638-9.641 6.106-13.591 10.098v-22.043c0-13.597-13.527-24.762-33.647-28.469v-16.281c0-4.142-3.358-7.5-7.5-7.5-13.278 0-26.778 5.105-37.039 14.006-11.55 10.02-17.912 23.928-17.912 39.161v31.423c0 9.697 15 9.697 15 0v-31.423c0-16.417 12.217-33.998 32.451-37.529v287.704c-11.77 1.471-23.79 6.179-32.421 14.474-.016-10.213-.03-193.372-.03-193.372 0-9.697-15-9.697-15 0v232.965c0 .421.043.831.11 1.233.737 21.999 21.09 38.439 47.939 38.439 12.999 0 24.629-3.7 33.196-9.797l.004 27.573c.004 25.344 25.351 39.664 48.056 39.664 24.1-.004 48.042-13.577 48.042-39.68l-.017-106.038h213.59l-155.632 132.508c-5.203 4.429-1.971 13.21 4.862 13.21h225.868c4.143 0 7.5-3.358 7.5-7.5v-36.382c0-9.697-15-9.697-15 0v28.882h-197.989l197.989-168.569v98.311c0 9.697 15 9.697 15 0v-60.458h30.982c4.143 0 7.5-3.358 7.5-7.5v-104.684-196.908c0-4.142-3.357-7.5-7.5-7.5zm-7.5 15v181.908h-175.652v-181.908zm-241.236-49.692v191.945h-31.793v-19.167h5.446c9.697 0 9.697-15 0-15h-5.446v-19.653h12.446c9.697 0 9.697-15 0-15h-12.446v-19.653h5.446c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5h-5.446v-19.653h12.446c9.697 0 9.697-15 0-15h-12.446v-19.652h5.446c9.697 0 9.697-15 0-15h-5.446v-19.167zm-137.304 118.78c3.238-1.532 6.634-2.606 10.187-3.223l.046 287.704c-8.355 1.046-21.861 4.328-32.419 14.479-.017-10.073-.033-17.87-.033-18.082l-.04-246.567c-.002-13.439 8.188-27.655 22.259-34.311zm43.884 316.655c-.253-.145-.508-.288-.767-.43-8.602-4.722-19.833-7.356-31.686-7.44l-.001-9.324c3.594-.495 6.008-.458 6.066-.458 4.696-.314 7.275-2.813 7.737-7.497l-.043-271.201c9.942 2.46 18.648 7.5 18.649 13.079zm-81.246-340.706v247.486 35.684c-8.357-4.799-19.65-7.687-32.451-7.773v-9.326c3.596-.495 6.01-.457 6.066-.456 4.696-.314 7.275-2.813 7.738-7.496v-271.249c11.424 2.735 18.647 8.407 18.647 13.13zm0 308.711c0 11.448-15.135 21.12-33.049 21.12-18.798 0-32.974-10.606-32.974-24.672 0-14.244 5.163-27.735 18.572-34.548v12.61c.534 4.906 3.269 7.395 8.204 7.467 10.422-.981 21.943.185 31.261 5.301 5.377 2.953 8.424 6.703 7.986 12.722zm48.205 78.56c-.003 0-.004 0-.008 0-18.793 0-32.969-10.604-32.971-24.666-.002-14.243 5.158-27.737 18.567-34.552l.002 12.611c.535 4.905 3.27 7.394 8.204 7.465 12.723-1.196 39.861.846 39.251 18.016.002 11.449-15.131 21.124-33.045 21.126zm47.996-329.84c-.002-13.502-13.574-24.733-33.652-28.456l-.003-16.288c-.43-4.571-2.93-7.071-7.501-7.499-3.828.001-7.672.439-11.454 1.257v-51.482h84.282v149.752c0 4.142 3.358 7.5 7.5 7.5h46.793c4.143 0 7.5-3.358 7.5-7.5v-149.752h35.584v189.408 97.183h-129.019zm291.864 138.226c-2.656-1.227-5.781-.799-8.008 1.098l-52.617 44.799h-87.19v-89.683h175.652v89.683h-23.482v-39.088c0-2.924-1.7-5.582-4.355-6.809z"/><path d="m357.34 214.917h69.105c1.974 0 3.918-.808 5.311-2.205l34.552-34.525c1.408-1.407 2.199-3.316 2.199-5.306l-.01-69.007c0-4.058-3.443-7.499-7.501-7.499l-69.114.008c-1.987 0-3.895.79-5.3 2.195l-34.538 34.511c-1.394 1.39-2.205 3.344-2.205 5.311v69.017c.001 4.143 3.359 7.5 7.501 7.5zm7.5-69.017h54.105v54.017h-54.105zm69.106 43.421v-47.812l19.556-19.54.007 47.806zm-38.956-77.938 47.89-.006-19.539 19.523h-47.885z"/><path d="m392.813 314.087h-24.851c-9.697 0-9.697 15 0 15h24.851c9.697 0 9.697-15 0-15z"/><path d="m431.639 284.242h-63.677c-9.697 0-9.697 15 0 15h63.677c9.697 0 9.697-15 0-15z"/><path d="m424.727 385.308-90.555 77.1c-5.201 4.429-1.97 13.21 4.862 13.21h90.555c4.143 0 7.5-3.358 7.5-7.5v-77.1c0-5.702-7.202-10.105-12.362-5.71zm-2.638 75.31h-62.677l62.677-53.364z"/></g></svg>
                                <p>
                                    Empresa referencia em qualidade e profissionalidade, com profissionais qualificados que atendem toda sua necessidade de construção civil.
                                </p>
                                <svg id="Capa_1" enable-background="new 0 0 512.009 512.009" height="512" viewBox="0 0 512.009 512.009" width="512" xmlns="http://www.w3.org/2000/svg"><g><path d="m497 257.51c-10.569 0-247.37 0-258 0v-97c0-8.284-6.716-15-15-15h-160c-8.284 0-15 6.716-15 15v97h-34c-8.284 0-15 6.716-15 15v112c0 8.284 6.716 15 15 15h66v82h-66c-8.284 0-15 6.716-15 15s6.716 15 15 15h482c8.284 0 15-6.716 15-15s-6.716-15-15-15h-66v-82h66c8.284 0 15-6.716 15-15v-112c0-8.285-6.716-15-15-15zm-176 112c-15.711 0-114.185 0-130 0v-82h130zm-242-194h130v82c-28.074 0-96.897 0-130 0zm-49 194v-82h131v82c-15.872 0-114.955 0-131 0zm81 30h130v82h-130zm290 82h-130v-82h130zm-50-112v-82h131v82c-16.048 0-115.135 0-131 0z"/><path d="m331.561 223.562c8.184 0 16.41-2.339 23.587-7.124l53.173-35.448c7.859-5.238 8.987-16.386 2.286-23.087l-17.394-17.394 22.621-22.62c17.834 8.827 39.678 5.577 54.116-8.861 28.209-28.21 28.284-28.384 28.284-28.284 18.445-18.445 18.288-48.181.001-66.468-18.369-18.369-48.1-18.37-66.468 0l-28.286 28.284c-14.82 14.82-17.516 36.756-8.876 54.131l-22.605 22.606-17.394-17.394c-6.701-6.706-17.851-5.569-23.087 2.286l-35.448 53.173c-18.757 28.135 1.326 66.2 35.49 66.2zm93.133-159.789 28.286-28.284c3.21-3.211 7.479-4.979 12.02-4.979 15.19 0 22.634 18.409 12.021 29.02 0 .1 1.516-1.515-28.284 28.286-6.623 6.62-17.391 6.626-24.021.019-6.414-6.392-6.857-17.226-.022-24.062zm-103.662 110.23 25.299-37.948 30.124 30.124-37.949 25.299c-4.979 3.319-11.666 2.659-15.899-1.574s-4.895-10.921-1.575-15.901z"/></g></svg>
                                <p>
                                    Sempre descobrindo, desenvolvendo e inovando com novas técnicas e tecnologias para atender as necessidades de nossos clientes.
                                </p>
                                <svg id="Capa_1" enable-background="new 0 0 512.921 512.921" height="512" viewBox="0 0 512.921 512.921" width="512" xmlns="http://www.w3.org/2000/svg"><g><path d="m177.217 127.383c4.142 0 7.5-3.357 7.5-7.5v-9.521c0-4.143-3.358-7.5-7.5-7.5s-7.5 3.357-7.5 7.5v9.521c0 4.143 3.358 7.5 7.5 7.5z"/><path d="m259.888 137.105c-2.93-2.928-7.677-2.929-10.607.001l-6.733 6.733c-2.929 2.929-2.928 7.678 0 10.606 2.93 2.928 7.677 2.929 10.607-.001l6.732-6.733c2.93-2.929 2.93-7.678.001-10.606z"/><path d="m286.631 227.277c4.143 0 7.5-3.357 7.5-7.5s-3.357-7.5-7.5-7.5h-9.521c-4.143 0-7.5 3.357-7.5 7.5s3.357 7.5 7.5 7.5z"/><path d="m253.155 285.108c-2.93-2.928-7.677-2.929-10.607.001-2.929 2.929-2.928 7.678 0 10.606l6.733 6.732c1.465 1.464 3.384 2.196 5.303 2.196s3.839-.732 5.303-2.197c2.929-2.929 2.929-7.678 0-10.606z"/><path d="m184.717 319.67c0-4.143-3.358-7.5-7.5-7.5s-7.5 3.357-7.5 7.5v9.521c0 4.143 3.358 7.5 7.5 7.5s7.5-3.357 7.5-7.5z"/><path d="m94.546 302.448c1.464 1.464 3.384 2.196 5.303 2.196s3.839-.732 5.303-2.196l6.732-6.732c2.929-2.93 2.929-7.678 0-10.607-2.929-2.928-7.678-2.928-10.606 0l-6.732 6.732c-2.929 2.929-2.929 7.677 0 10.607z"/><path d="m67.803 212.277c-4.142 0-7.5 3.357-7.5 7.5s3.358 7.5 7.5 7.5h9.521c4.142 0 7.5-3.357 7.5-7.5s-3.358-7.5-7.5-7.5z"/><path d="m111.885 154.446c2.929-2.929 2.93-7.678.001-10.606l-6.732-6.733c-2.928-2.93-7.677-2.929-10.606-.001-2.929 2.929-2.93 7.678-.001 10.606l6.732 6.733c2.928 2.929 7.676 2.929 10.606.001z"/><path d="m508.426 350.083-13.831-6.047-7.003-16.906 5.504-14.057c1.087-2.775.428-5.931-1.681-8.038l-16.562-16.561c-2.105-2.105-5.259-2.767-8.037-1.68l-14.056 5.504-16.906-7.003-6.048-13.832c-1.194-2.73-3.892-4.495-6.872-4.495h-23.421c-2.98 0-5.678 1.765-6.872 4.495l-6.047 13.832-16.906 7.003-14.056-5.504c-2.776-1.086-5.931-.427-8.037 1.68l-16.562 16.561c-2.108 2.107-2.768 5.263-1.681 8.038l5.504 14.057-7.003 16.906-13.832 6.047c-2.73 1.194-4.495 3.892-4.495 6.872v23.421c0 2.98 1.765 5.678 4.495 6.872l13.832 6.047 7.003 16.906-5.504 14.057c-1.087 2.775-.428 5.931 1.68 8.038l16.562 16.562c2.107 2.105 5.261 2.768 8.038 1.68l14.056-5.504 16.906 7.002 6.047 13.832c1.194 2.73 3.892 4.495 6.872 4.495h23.421c2.98 0 5.678-1.765 6.872-4.495l6.048-13.831 16.906-7.003 14.056 5.504c2.778 1.088 5.932.426 8.038-1.68l16.562-16.562c2.107-2.107 2.767-5.263 1.68-8.038l-5.504-14.057 7.003-16.906 13.831-6.047c2.73-1.194 4.495-3.892 4.495-6.872v-23.421c0-2.98-1.764-5.677-4.495-6.872zm-10.505 25.387-12.104 5.292c-1.776.776-3.183 2.211-3.924 4.002l-9.314 22.488c-.742 1.791-.762 3.8-.055 5.604l4.816 12.302-9.623 9.623-12.301-4.816c-1.803-.707-3.814-.688-5.604.055l-22.488 9.314c-1.791.741-3.225 2.147-4.002 3.924l-5.293 12.104h-13.609l-5.292-12.104c-.776-1.776-2.211-3.183-4.002-3.924l-22.488-9.314c-1.793-.743-3.802-.762-5.604-.055l-12.301 4.816-9.623-9.623 4.816-12.302c.707-1.805.688-3.813-.055-5.604l-9.315-22.488c-.741-1.791-2.148-3.226-3.924-4.002l-12.104-5.292v-13.608l12.104-5.292c1.775-.776 3.183-2.211 3.924-4.002l9.315-22.488c.742-1.791.762-3.8.055-5.604l-4.816-12.302 9.623-9.622 12.301 4.816c1.803.707 3.813.688 5.604-.055l22.488-9.315c1.791-.741 3.226-2.148 4.002-3.924l5.292-12.104h13.608l5.293 12.104c.777 1.776 2.211 3.183 4.002 3.924l22.488 9.315c1.789.742 3.8.762 5.604.055l12.301-4.816 9.623 9.622-4.816 12.302c-.707 1.805-.688 3.813.055 5.604l9.314 22.488c.741 1.791 2.147 3.226 3.924 4.002l12.104 5.292v13.608z"/><path d="m411.225 336.48c13.136 0 24.834 7.861 29.804 20.028 1.566 3.834 5.945 5.672 9.779 4.107 3.835-1.566 5.674-5.944 4.107-9.779-7.284-17.833-24.434-29.356-43.69-29.356-26.019 0-47.187 21.168-47.187 47.187s21.168 47.187 47.187 47.187c19.256 0 36.405-11.523 43.69-29.357 1.566-3.834-.272-8.213-4.107-9.779-3.839-1.566-8.213.272-9.779 4.107-4.97 12.167-16.669 20.029-29.804 20.029-17.748 0-32.187-14.438-32.187-32.187s14.439-32.187 32.187-32.187z"/><path d="m177.217 298.781c43.563 0 79.004-35.441 79.004-79.005 0-37.04-26.262-69.529-62.446-77.252-4.052-.865-8.036 1.719-8.9 5.77s1.719 8.036 5.77 8.9c29.306 6.255 50.577 32.574 50.577 62.582 0 35.292-28.712 64.005-64.004 64.005s-64.005-28.713-64.005-64.005c0-30.008 21.271-56.327 50.577-62.582 4.051-.864 6.634-4.85 5.77-8.9-.865-4.052-4.852-6.634-8.9-5.77-36.184 7.723-62.446 40.212-62.446 77.252-.002 43.564 35.44 79.005 79.003 79.005z"/><path d="m319.128 322.131-10.8-27.581 14.471-34.937 27.14-11.865c2.73-1.194 4.495-3.892 4.495-6.872v-42.199c0-2.98-1.765-5.678-4.495-6.872l-27.14-11.865-14.471-34.937 10.8-27.581c1.087-2.775.428-5.931-1.68-8.038l-29.838-29.839c-2.107-2.105-5.263-2.765-8.038-1.68l-27.582 10.8-34.935-14.471-11.866-27.141c-1.194-2.73-3.892-4.495-6.872-4.495h-42.199c-2.98 0-5.678 1.765-6.872 4.495l-11.866 27.141-34.935 14.471-27.582-10.8c-2.775-1.087-5.93-.427-8.038 1.68l-29.839 29.839c-2.107 2.107-2.767 5.263-1.681 8.038l10.8 27.581-14.47 34.937-27.139 11.865c-2.731 1.194-4.496 3.892-4.496 6.872v42.199c0 2.98 1.765 5.678 4.496 6.872l27.139 11.865 14.471 34.937-10.8 27.581c-1.086 2.775-.427 5.931 1.681 8.038l29.839 29.839c2.106 2.106 5.263 2.766 8.038 1.68l27.582-10.8 34.935 14.471 11.866 27.14c1.194 2.73 3.892 4.495 6.872 4.495h6.106c4.142 0 7.5-3.357 7.5-7.5s-3.358-7.5-7.5-7.5h-1.2l-11.111-25.412c-.777-1.776-2.211-3.183-4.002-3.924l-40.518-16.783c-1.791-.743-3.8-.763-5.604-.055l-25.826 10.112-22.9-22.9 10.113-25.826c.707-1.805.687-3.813-.055-5.604l-16.783-40.519c-.742-1.791-2.148-3.226-3.925-4.002l-25.414-11.111v-32.387l25.412-11.11c1.776-.776 3.183-2.211 3.925-4.002l16.783-40.519c.742-1.791.761-3.8.055-5.604l-10.113-25.826 22.9-22.9 25.826 10.112c1.805.708 3.814.688 5.604-.055l40.518-16.783c1.791-.741 3.225-2.148 4.002-3.924l11.111-25.413h32.386l11.111 25.413c.777 1.775 2.211 3.183 4.002 3.924l40.518 16.783c1.791.743 3.799.763 5.604.055l25.827-10.112 22.9 22.9-10.112 25.826c-.707 1.805-.688 3.813.055 5.604l16.783 40.519c.741 1.791 2.148 3.226 3.924 4.002l25.412 11.11v32.387l-25.412 11.11c-1.775.776-3.183 2.211-3.924 4.002l-16.783 40.519c-.742 1.791-.762 3.8-.055 5.604l10.112 25.826-22.9 22.9-25.827-10.112c-1.805-.708-3.813-.688-5.604.055l-40.518 16.783c-1.791.741-3.225 2.147-4.002 3.924l-11.111 25.412h-1.2c-4.142 0-7.5 3.357-7.5 7.5s3.358 7.5 7.5 7.5h6.106c2.98 0 5.678-1.765 6.872-4.495l11.867-27.14 34.935-14.471 27.582 10.8c2.775 1.088 5.931.427 8.038-1.68l29.839-29.839c2.108-2.106 2.767-5.262 1.68-8.037z"/></g></svg>
                                <p>
                                    Procuramos utilizar métodos não destrutivos, buscando sempre conhecimento.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default About