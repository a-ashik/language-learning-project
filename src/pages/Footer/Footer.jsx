import React from 'react';

const Footer = () => {
    return (
        <div>
        <footer className="page-footer font-small blue pt-4 bg-dark text-light">
            <div className="container-fluid text-center text-md-left">
                <div className="row">
                    <div className="col-md-3 mt-md-0 mt-3">
                        <h5 className="text-uppercase">Languages platform</h5>
                        <p>You can learn so many languages from here.</p>
                    </div>

                    <hr className="clearfix w-100 d-md-none pb-0"/>

                    <div className="col-md-3 mb-md-0 mb-3">
                        <h5 className="text-uppercase">Social media</h5>
                        <ul className="list-unstyled">
                            <li>Facebook</li>
                            <li>Youtube</li>
                            <li>LinkedIn</li>
                            <li>Instagram</li>
                        </ul>
                    </div>

                    <div className="col-md-3 mb-md-0 mb-3">
                        <h5 className="text-uppercase">Languages</h5>
                        <ul className="list-unstyled">
                            <li>English</li>
                            <li>Spanish </li>
                            <li>German</li>
                            <li>Chinese</li>
                        </ul>
                    </div>
                    <div className="col-md-3 mb-md-0 mb-3">
                        <h5 className="text-uppercase">Languages</h5>
                        <p>English has today assumed the position of a world language. The languages Arabic, Swahili, and French play a vital role as international languages,</p>
                    </div>
                </div>
            </div>

            <div className="footer-copyright text-center py-3">© 2023 Copyright: Languages platform
            </div>

        </footer>
        </div>
    );
};

export default Footer;