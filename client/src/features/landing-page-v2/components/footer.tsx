export function Footer() {
    return (
        <footer className="footer pb-8">
            <div data-w-id="86ebf9f6-3750-2468-f857-0407fdb08613" style={{ opacity: 1 }} className="content space-y-10">
                <div className="grid md:grid-cols-3 gap-2 md:gap-10">
                    <div className="footer__col space-y-2">
                        <a href="#" className="header__logo w-inline-block">
                            <h1 className="header__logo w-inline-block text-4xl font-semibold">Uhamba<span className="dot-green">.</span></h1>
                        </a>
                        <p>
                            Uhamba is an inclusive learning platform built for underserved learners across Africa. We connect skills, confidence, and purpose with local relevance and global tools.
                        </p>
                    </div>
                    <div className="footer__col flex flex-row col--nav">
                        <ul role="list" className="footer__nav-list flex flex-col space-y-2">
                            <li className="footer__nav-list-item"><a href="/about" className="footer__nav-link">About</a></li>
                            <li className="footer__nav-list-item"><a href="/pathways" className="footer__nav-link">Our Vision</a></li>
                            <li className="footer__nav-list-item"><a href="/partners" className="footer__nav-link">Partners</a></li>
                            <li className="footer__nav-list-item"><a href="/support" className="footer__nav-link w--current">Become a Member</a></li>
                        </ul>
                        <ul role="list" className="footer__nav-list flex flex-col space-y-2">
                            <li className="footer__nav-list-item"><a href="/partners" className="footer__nav-link">Partners</a></li>
                            <li className="footer__nav-list-item"><a href="/support" className="footer__nav-link w--current">Privacy policy</a></li>
                            <li className="footer__nav-list-item"><a href="/pathways" className="footer__nav-link">Terms of use</a></li>
                        </ul>
                    </div>
                    <div className="footer__col">
                        <div className="footer__subs-title stroke--06">Stay updated us!</div>
                        <div className="form-block w-form">
                            <form id="wf-form-footer" name="wf-form-footer" data-name="footer" method="get" className="form" aria-label="footer">
                                <div className="form__content">
                                    <input type="email" className="input mod--footer w-input" maxLength={256} name="email" data-name="email" placeholder="Enter your email" id="email" />
                                    <div data-form-submitted="active" className="btn-submit mod--form-footer">
                                        <div form-submitted="anim" className="btn-submit stroke--btn-1">GO</div>
                                        <div className="form__submit-result-wrap">
                                            <div form-submitted="anim" className="form__submit-result">
                                                <img src="https://assets.website-files.com/617fa48948c7ab24b715140e/632c29441cc90ef5bad8e9e5_ico-cheked.svg" loading="lazy" alt="" className="form__submit-result-ico" />
                                            </div>
                                        </div>
                                        <input type="submit" value="Submit" data-wait="Please wait..." className="form__submit w-button" />
                                    </div>
                                </div>
                            </form>
                            <div className="w-form-done" tabIndex={-1} role="region" aria-label="footer success">
                                <div>Thank you! Your submission has been received!</div>
                            </div>
                            <div className="w-form-fail" tabIndex={-1} role="region" aria-label="footer failure">
                                <div>Oops! Something went wrong while submitting the form.</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer__bottom">
                    <div className="footer__copyright">
                        <img src="https://assets.website-files.com/617fa48948c7ab24b715140e/619f7e9a1cc6db8ecfc33794_logo-copyright.svg" loading="eager" alt="" className="footer__copyright-logo" />
                        <div>2025 Servor Technologies. All rights reserved</div>
                    </div>
                    <div className="footer__social">
                        <a href="https://www.facebook.com/uhamba/" target="_blank" className="footer__soc-link w-inline-block">
                            <img src="https://assets.website-files.com/617fa48948c7ab24b715140e/618ebffa14d2842923cf72ce_ico_soc-fb.svg" loading="eager" alt="" className="footer__soc-img" />
                        </a>
                        <a href="https://www.linkedin.com/company/uhamba/" target="_blank" className="footer__soc-link w-inline-block">
                            <img src="https://assets.website-files.com/617fa48948c7ab24b715140e/618ebffb14d284f5accf72cf_ico_soc-in.svg" loading="eager" alt="" className="footer__soc-img" />
                        </a>
                        <a href="https://www.instagram.com/uhamba/" target="_blank" className="footer__soc-link w-inline-block">
                            <img src="https://assets.website-files.com/617fa48948c7ab24b715140e/618ec00349dffaacd6f2fdf1_ico_soc-inst.svg" loading="eager" alt="" className="footer__soc-img" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}