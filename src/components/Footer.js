import React from 'react';
import './Footer.css';

function Footer(props) {
    const linksFooter = [
        'FAQ',
        'Investor Relations',
        'Ways to Watch',
        'Corporate Information',
        'Only on Netflix',
        'Help Center',
        'Jobs',
        'Terms of Use',
        'Contact Us',
        'Account',
        'Redeem Gift Cards',
        'Privacy',
        'Speed Test',
        'Media Center',
        'Buy Gift Cards',
        'Cookie Preferences',
        'Legal Notices',
    ]
    return (
        <>
            <div className='footer'>
                <div className='footer-title'>
                    <p>Questions? Call 800-522-9957</p>
                </div>
                <div className="links-container-grid">
                    <div className='grid-box'>
                        <ul>
                            {
                                linksFooter.slice(0, 5).map((link, index) => {
                                    return <li className='link' key={index}>{link}</li>
                                })
                            }
                        </ul>
                    </div>
                    <div className='grid-box'>
                        <ul>
                            {
                                linksFooter.slice(5, 9).map((link, index) => {
                                    return <li className='link' key={index}>{link}</li>
                                })
                            }
                        </ul>
                    </div>
                    <div className='grid-box'>
                        <ul>
                            {
                                linksFooter.slice(9, 13).map((link, index) => {
                                    return <li className='link' key={index}>{link}</li>
                                })
                            }
                        </ul>
                    </div>
                    <div className='grid-box'>
                        <ul>
                            {
                                linksFooter.slice(13, 17).map((link, index) => {
                                    return <li className='link' key={index}>{link}</li>
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;