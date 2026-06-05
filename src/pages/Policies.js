import React, { useState } from 'react';
import './Policies.css';

function Policies() {
    const [openSection, setOpenSection] = useState(null);

    const toggleSection = (section) => {
        setOpenSection(openSection === section ? null : section);
    };

    return (
        <div className="policies-page">
            <div className="policies-container">
                <div className="accordion">
                    {/* Privacy Policy */}
                    <div className="accordion-item">
                        <button
                            className="accordion-header"
                            onClick={() => toggleSection('privacy-policy')}
                            aria-expanded={openSection === 'privacy-policy'}
                        >
                            <span>Privacy Policy</span>
                            <span className={`accordion-icon ${openSection === 'privacy-policy' ? 'open' : ''}`}>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </span>
                        </button>
                        {openSection === 'privacy-policy' && (
                            <div className="accordion-content">
                                <section>
                                    <p>The Way (A Liberty Church Plant) is committed to ensuring that your privacy is protected. Should we ask you to provide certain information by which you can be identified when using this website, then you can be assured that it will only be used in accordance with this privacy statement.</p>
                                    <p>The Way may change this policy from time to time by updating this page. You should check this page from time to time to ensure that you are happy with any changes.</p>
                                    <p>This policy is effective from 17th July 2024.</p>
                                </section>

                                <section>
                                    <h3>What We Collect</h3>
                                    <p>We may collect the following information:</p>
                                    <ul>
                                        <li>name and job title</li>
                                        <li>contact information including email address</li>
                                        <li>demographic information such as postcode, preferences and interests</li>
                                        <li>other information relevant to customer surveys and/or offers</li>
                                    </ul>
                                </section>

                                <section>
                                    <h3>What We Do With The Information We Gather</h3>
                                    <p>We require this information to understand your needs and provide you with a better service, and in particular for the following reasons:</p>
                                    <ul>
                                        <li>Internal record keeping.</li>
                                        <li>We may use the information to improve our products and services.</li>
                                        <li>We may periodically send promotional email about new products, special offers or other information which we think you may find interesting using the email address which you have provided.</li>
                                        <li>From time to time, we may also use your information to contact you for market research purposes. We may contact you by email or phone</li>
                                        <li>We may use the information to customise the website according to your interests.</li>
                                    </ul>
                                </section>

                                <section>
                                    <h3>Security</h3>
                                    <p>We are committed to ensuring that your information is secure. In order to prevent unauthorised access or disclosure we have put in place suitable physical, electronic and managerial procedures to safeguard and secure the information we collect online.</p>
                                </section>

                                <section>
                                    <h3>Links To Other Websites</h3>
                                    <p>Our website may contain links to enable you to visit other websites of interest easily. However, once you have used these links to leave our site, you should note that we do not have any control over that other website. Therefore, we cannot be responsible for the protection and privacy of any information which you provide whilst visiting such sites and such sites are not governed by this privacy statement. You should exercise caution and look at the privacy statement applicable to the website in question.</p>
                                </section>

                                <section>
                                    <h3>Controlling Your Personal Information</h3>
                                    <p>You may choose to restrict the collection or use of your personal information in the following ways:</p>
                                    <ul>
                                        <li>whenever you are asked to fill in a form on the website, look for the box that you can click to indicate that you do not want the information to be used by anybody for direct marketing purposes</li>
                                        <li>if you have previously agreed to us using your personal information for direct marketing purposes, you may change your mind at any time by writing to or emailing us at <a href="mailto:admin@thewaycardiff.co.uk">admin@thewaycardiff.co.uk</a></li>
                                    </ul>
                                    <p>We will not sell, distribute or lease your personal information to third parties unless we have your permission or are required by law to do so. We may use your personal information to send you promotional information about third parties which we think you may find interesting if you tell us that you wish this to happen.</p>
                                    <p>You may request details of personal information which we hold about you under the Data Protection Act 1998. A small fee will be payable. If you would like a copy of the information held on you please write to The Way Church, Cardiff.</p>
                                    <p>If you believe that any information we are holding on you is incorrect or incomplete, please write to or email us as soon as possible, at the above address. We will promptly correct any information found to be incorrect.</p>
                                </section>
                            </div>
                        )}
                    </div>

                    {/* Privacy Notice */}
                    <div className="accordion-item">
                        <button
                            className="accordion-header"
                            onClick={() => toggleSection('privacy-notice')}
                            aria-expanded={openSection === 'privacy-notice'}
                        >
                            <span>Privacy Notice</span>
                            <span className={`accordion-icon ${openSection === 'privacy-notice' ? 'open' : ''}`}>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </span>
                        </button>
                        {openSection === 'privacy-notice' && (
                            <div className="accordion-content">
                                <section>
                                    <h3>1. Introduction</h3>
                                    <p>The Way (A Liberty Church Plant) ('we') are committed to being transparent about how it handles your personal information, to protecting the privacy and security of your personal information and to meeting its data protection obligations under the General Data Protection Regulation ('GDPR') and the Data Protection Act 2018. This privacy notice applies to all members, staff (employed/self-employed/contractors) and volunteers. We have appointed Lois Hillier as our data controller to oversee compliance with this privacy notice and all matters relating to Data Protection.</p>
                                </section>

                                <section>
                                    <h3>Data Protection Principles</h3>
                                    <p>Under the GDPR there are six data protection principles which we must comply with. These provide that the personal information that we hold about you must be:</p>
                                    <ul>
                                        <li>Processed lawfully, fairly and in a transparent manner</li>
                                        <li>Collected only for specified and legitimate purposes</li>
                                        <li>Adequate, relevant and limited to what is necessary in relation to those purposes</li>
                                        <li>Accurate and kept up to date</li>
                                        <li>Kept in a form which permits your identification for no longer than is necessary for those purposes</li>
                                        <li>Processed in a way that ensures appropriate security of the data</li>
                                    </ul>
                                </section>

                                <section>
                                    <h3>Why do we collect and use your information?</h3>
                                    <p>The purposes for which we are collecting and processing your personal information are:</p>
                                    <ul>
                                        <li>notices sheets and e-bulletins</li>
                                        <li>members letters</li>
                                        <li>communication regarding church activities and events</li>
                                        <li>gospel community activities</li>
                                        <li>to provide pastoral care</li>
                                        <li>to fulfil our purposes as a church</li>
                                        <li>to monitor and assess the quality of our services</li>
                                        <li>to comply with the law regarding data sharing</li>
                                        <li>volunteer/church rotas</li>
                                        <li>DBS checks</li>
                                    </ul>
                                </section>

                                <section>
                                    <h3>Types of information we collect about you</h3>
                                    <p>We collect, use and process a range of information about you. This includes:</p>
                                    <ul>
                                        <li>your contact details, including your name, address, telephone numbers and personal e-mail address</li>
                                        <li>your emergency contact details/next of kin</li>
                                        <li>your date of birth</li>
                                        <li>your gender</li>
                                        <li>photographs</li>
                                        <li>financial donations</li>
                                    </ul>
                                    <p>Additionally, if you are a member of staff (employed/self-employed/contractor) or a volunteer who claims expenses, we may also hold:</p>
                                    <ul>
                                        <li>recruitment records including any information held in a CV, application form, interview notes, references</li>
                                        <li>the terms and conditions of your employment as set out in your contract</li>
                                        <li>salary, benefits and pension information</li>
                                        <li>NI number</li>
                                        <li>bank account details, information about your use of our IT systems</li>
                                        <li>payroll records, tax code and status information</li>
                                        <li>training records</li>
                                        <li>annual leave and other leave records, including reasons for absence</li>
                                        <li>information about your health, including any medical conditions or disability which require us to make reasonable adjustments and sickness records</li>
                                    </ul>
                                </section>

                                <section>
                                    <h3>Change of Purpose</h3>
                                    <p>We will only use your personal information for the purposes which we collected it. If we need to use your personal information for any other purpose we will provide you, prior to further processing, with information about the new purpose.</p>
                                </section>

                                <section>
                                    <h3>Who has access to your personal information</h3>
                                    <p>Your personal information may be shared internally for the purposes of church activities (Gospel Community groups/ pastoral care/rotas) and, in the case of staff (employed/self-employed/contractors) and volunteers, for payroll and expenses. For those signed up to the Gift Aid programme information will be shared with HMRC. For staff (employed/self-employed/contractors) relevant information will also be shared with payroll providers, pension scheme providers, HMRC, audit, accounting and external IT services. We will not share your information with third parties without your consent unless the law requires us to do so.</p>
                                </section>

                                <section>
                                    <h3>Storing your data</h3>
                                    <p>We hold your data for varying lengths of time depending on the type of information but in doing so we will always comply with Legislation. We will check with you on an annual basis that the information we hold is accurate and up to date.</p>
                                </section>

                                <section>
                                    <h3>Protecting your data</h3>
                                    <p>Your privacy is important to us and we are committed to safeguarding the privacy of the information we hold about you. Your data is held and protected in line with our Data Protection policy which is available from Lois Hillier on request.</p>
                                </section>

                                <section>
                                    <h3>Requesting access to your personal data</h3>
                                    <p>Under Data Protection legislation, you have the right to request access to information about you that we hold. To make a request for your personal information contact Lois Hillier. You also have the right to:</p>
                                    <ul>
                                        <li>object to processing of personal data that is likely to cause, or is causing, damage or distress</li>
                                        <li>prevent processing for the purpose of direct marketing</li>
                                        <li>object to decisions being taken by automated means</li>
                                        <li>in certain circumstances, have inaccurate personal data rectified, blocked, erased or destroyed</li>
                                        <li>claim compensation for damages caused by a breach of the Data Protection regulations</li>
                                    </ul>
                                    <p>For further information on how your information is used, how we maintain the security of your information and your rights to access information we hold on you please contact Lois Hillier. If you have a concern about the way we are collecting or using your personal data, you should raise your concern with us in the first instance or directly to the Information Commissioner's Office.</p>
                                </section>

                                <section>
                                    <h3>Contact</h3>
                                    <p>If you would like to discuss anything in this privacy notice please contact Lois Hillier, <a href="mailto:admin@thewaycardiff.co.uk">admin@thewaycardiff.co.uk</a>.</p>
                                    <p>Information Commissioners Office: <a href="https://ico.org.uk/concerns/" target="_blank" rel="noopener noreferrer">https://ico.org.uk/concerns/</a></p>
                                </section>
                            </div>
                        )}
                    </div>

                    {/* Retention Policy */}
                    <div className="accordion-item">
                        <button
                            className="accordion-header"
                            onClick={() => toggleSection('retention-policy')}
                            aria-expanded={openSection === 'retention-policy'}
                        >
                            <span>Retention Policy</span>
                            <span className={`accordion-icon ${openSection === 'retention-policy' ? 'open' : ''}`}>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </span>
                        </button>
                        {openSection === 'retention-policy' && (
                            <div className="accordion-content">
                                <section>
                                    <h3>Storage of Data and Records Statement</h3>
                                    <p>All data and records will be stored in accordance with the security requirements of the Data Protection Legislation and in the most convenient and appropriate location having regard to the period of retention required and the frequency with which access will be made to the record.</p>
                                    <p>Data and records which are active should be stored in the most appropriate place for their purpose commensurate with security requirements.</p>
                                    <p>Data and records which are no longer active, due to their age or subject, should be stored in the most appropriate place for their purpose.</p>
                                    <p>The degree of security required for file storage will reflect the sensitivity and confidential nature of any material recorded.</p>
                                    <p>Any data file or record which contains personal data of any form can be considered as confidential in nature.</p>
                                    <p>Data and records should not be kept for longer than is necessary. This principle finds statutory form in the Data Protection Legislation, which requires that personal data processed for any purpose "shall not be kept for longer than is necessary for that purpose". All groups are required to have regard to the Guidelines for Retention of Personal Data attached hereto.</p>
                                    <p>Any data that is to be disposed must be safely disposed of for example by shredding. Any group which does not have access to a shredder should pass material to Lois Hillier who will undertake secure shredding.</p>
                                    <p>Special care must be given to disposing of data stored in electronic media. Guidance will be given by the Church Leadership team to any group which has stored personal data relating to its members on for example personal computers which are to be disposed of.</p>
                                </section>

                                <section>
                                    <h3>Guidelines for Retention of Personal Data</h3>
                                    <p><em>(This is not an exhaustive list)</em></p>
                                    <p>If you have any queries regarding retaining or disposing of data please contact Lois Hillier.</p>

                                    <div className="retention-table">
                                        <div className="retention-row retention-header">
                                            <div className="retention-type">Types of Data</div>
                                            <div className="retention-period">Suggested Retention Period</div>
                                        </div>

                                        <div className="retention-row">
                                            <div className="retention-type">
                                                <strong>Personnel files</strong><br />
                                                including training records and notes of disciplinary and grievance hearings
                                            </div>
                                            <div className="retention-period">6 years from the end of employment</div>
                                        </div>

                                        <div className="retention-row">
                                            <div className="retention-type">
                                                <strong>Application forms / interview notes</strong>
                                            </div>
                                            <div className="retention-period">Maximum of one year from the date of the interviews for those not subsequently employed. If employed, retain in personnel file.</div>
                                        </div>

                                        <div className="retention-row">
                                            <div className="retention-type">
                                                <strong>Information relating to children</strong>
                                            </div>
                                            <div className="retention-period">
                                                Check for accuracy once a year<br />
                                                Record that child was a member of the group – permanent<br />
                                                Secure destruction of personal data other than name and fact of membership – three years after cease to be a member
                                            </div>
                                        </div>

                                        <div className="retention-row">
                                            <div className="retention-type">
                                                <strong>Church member information</strong>
                                            </div>
                                            <div className="retention-period">
                                                Check for accuracy once a year<br />
                                                Record that adult was a member – permanent<br />
                                                Secure destruction of personal data other than name and fact of membership – three years after cease to be a member<br />
                                                Notes from one to one sessions and prayer requests are kept for a year after a member should leave the church, or the records should not be required or the person requests the removal of their information.
                                            </div>
                                        </div>

                                        <div className="retention-row">
                                            <div className="retention-type">
                                                <strong>Church group member information</strong>
                                            </div>
                                            <div className="retention-period">
                                                Check for accuracy once a year<br />
                                                Record that adult was a member of group – permanent<br />
                                                Secure destruction of personal data other than name and fact of membership – three years after cease to be a member
                                            </div>
                                        </div>

                                        <div className="retention-row">
                                            <div className="retention-type">
                                                <strong>Income Tax and NI returns</strong><br />
                                                including correspondence with tax office
                                            </div>
                                            <div className="retention-period">At least 6 years after the end of the financial year to which the records relate</div>
                                        </div>

                                        <div className="retention-row">
                                            <div className="retention-type">
                                                <strong>Statutory Maternity Pay records and calculations</strong>
                                            </div>
                                            <div className="retention-period">As Above (Statutory Maternity Pay (General) Regulations 1986)</div>
                                        </div>

                                        <div className="retention-row">
                                            <div className="retention-type">
                                                <strong>Statutory Sick Pay records and calculations</strong>
                                            </div>
                                            <div className="retention-period">As Above (Statutory Sick Pay (General) Regulations 1982)</div>
                                        </div>

                                        <div className="retention-row">
                                            <div className="retention-type">
                                                <strong>Wages and salary records</strong>
                                            </div>
                                            <div className="retention-period">6 years from the tax year in which generated</div>
                                        </div>

                                        <div className="retention-row">
                                            <div className="retention-type">
                                                <strong>Accident books, and records and reports of accidents</strong>
                                            </div>
                                            <div className="retention-period">
                                                (for Adults) 3 years after the date of the last entry<br />
                                                (for children) three years after the child attains 18 years (RIDDOR 1985)
                                            </div>
                                        </div>

                                        <div className="retention-row">
                                            <div className="retention-type">
                                                <strong>Health records</strong>
                                            </div>
                                            <div className="retention-period">6 months from date of leaving employment (Management of Health and Safety at Work Regulations)</div>
                                        </div>

                                        <div className="retention-row">
                                            <div className="retention-type">
                                                <strong>Health records where reason for termination of employment is connected with health</strong><br />
                                                including stress related illness
                                            </div>
                                            <div className="retention-period">3 years from date of leaving employment (Limitation period for personal injury claims)</div>
                                        </div>

                                        <div className="retention-row">
                                            <div className="retention-type">
                                                <strong>Student records</strong><br />
                                                including academic achievements and conduct
                                            </div>
                                            <div className="retention-period">At least 6 years from the date the student leaves in case of litigation for negligence</div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        )}
                    </div>

                    {/* Safeguarding Policy */}
                    <div className="accordion-item">
                        <button
                            className="accordion-header"
                            onClick={() => toggleSection('safeguarding-policy')}
                            aria-expanded={openSection === 'safeguarding-policy'}
                        >
                            <span>Safeguarding Policy</span>
                            <span className={`accordion-icon ${openSection === 'safeguarding-policy' ? 'open' : ''}`}>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </span>
                        </button>
                        {openSection === 'safeguarding-policy' && (
                            <div className="accordion-content">
                                <h3>Protection of Children and Adults Policy Statement</h3>

                                <section>
                                    <p><strong>Name of Place of worship/organisation:</strong> The Way (A Liberty Church Plant)</p>
                                    <p><strong>The following statement was agreed by the leadership/organisation on:</strong> 01/02/2024</p>
                                    <p>This place of worship/organisation is committed to the safeguarding of children and adults with care and support needs and ensuring their well-being.</p>
                                </section>

                                <section>
                                    <p>We recognise that we all have a responsibility to help prevent the physical, sexual, psychological, financial and discriminatory abuse and neglect of adults and children at risk of harm and abuse and to report any such abuse that we discover or suspect.</p>
                                    <p>We recognise the personal dignity and rights of adults and children and will ensure all our policies and procedures will reflect this.</p>
                                    <p>We believe all adults and children should enjoy and have access to every aspect of the life of the place of worship/organisation.</p>
                                    <p>We undertake to exercise proper care in the appointment and selection of those who will work with children and adults with care and support needs.</p>
                                    <p>We believe every child should be valued, safe and happy. We want to make sure that children we have contact with know this and are empowered to tell us if they are experiencing significant harm.</p>
                                </section>

                                <section>
                                    <h3>We are committed to:</h3>
                                    <ul>
                                        <li>Following statutory denominational and specialist guidelines in relation to safeguarding children and adults and will ensure that as a place of worship/organisation all workers will work within the agreed procedure of our safeguarding policy.</li>
                                        <li>Implementing the requirements of the Disability Discrimination Acts 1995 and 2005, Equality Act 2010 and all other relevant legislation, including the All Wales Child Protection Procedures 2021 and Wales Safeguarding Procedures</li>
                                        <li>Supporting, resourcing and training all those who undertake this work.</li>
                                        <li>Ensuring that we are keeping up to date with national and local developments relating to all aspects of safeguarding.</li>
                                        <li>Ensuring that everyone agrees to abide by these recommendations and the guidelines established by this place of worship/organisation.</li>
                                        <li>Supporting every adult and child in the place of worship/organisation affected by abuse.</li>
                                    </ul>
                                </section>

                                <section>
                                    <h3>We recognise:</h3>
                                    <ul>
                                        <li>Children's Social Services has lead responsibility for investigating all allegations or suspicions of abuse where there are concerns about a child. Adult Social Care has lead responsibility for investigating all allegations or suspicions of abuse where there are concerns about an adult with care and support needs.</li>
                                        <li>Where an allegation suggests that a criminal offence may have been committed then the police should be contacted as a matter of urgency.</li>
                                        <li>Safeguarding is everyone's responsibility.</li>
                                    </ul>
                                    <p>We will review this statement and our policy annually.</p>
                                </section>

                                <section>
                                    <h3>Safeguarding Team</h3>
                                    <p>If you have any concerns for a child or adult, then speak to one of the following who have been approved as safeguarding co-ordinators for this place of worship/organisation:</p>
                                    <ul>
                                        <li>Graham Sheppard</li>
                                        <li>Daniel Geldart</li>
                                        <li>Lois Hillier</li>
                                        <li>Cassandra Burton (admin)</li>
                                        <li>Linda Gibson (admin)</li>
                                    </ul>
                                    <p>A copy of this place of worship's/organisation's policy can be seen both here on our website and at The Way Church office.</p>
                                </section>

                                <section>
                                    <h3>Signed by leadership/organisation:</h3>
                                    <p><strong>Signed:</strong> Heath Van Staden (Lead Elder)<br />
                                        <strong>Date:</strong> 01/02/2024</p>
                                    <p><strong>Signed:</strong> Graham Sheppard (Trustee)<br />
                                        <strong>Date:</strong> 01/02/2024</p>
                                </section>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Policies;
