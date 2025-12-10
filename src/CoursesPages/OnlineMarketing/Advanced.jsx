
function Advanced() {
    return (
        <>
            <section className="container my-5">
                <h2 className="text-center mb-4 fw-bold text-danger">
                    Online Marketing – Advanced Level
                </h2>

                <div className="row">

                    {/* Conversion Rate Optimization */}
                    <div className="col-md-6 mb-4">
                        <div className="card shadow-sm border-0">
                            <div className="card-body">
                                <h4 className="fw-bold text-success">Conversion Rate Optimization (CRO)</h4>
                                <p>

                                    The goal of CRO is to convert website visitors into customers.
                                    It includes A/B testing, heatmaps and landing page optimization.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Marketing Automation */}
                    <div className="col-md-6 mb-4">
                        <div className="card shadow-sm border-0">
                            <div className="card-body">
                                <h4 className="fw-bold text-success">Marketing Automation</h4>
                                <p>
                                    Automation tools like HubSpot, Mailchimp, ActiveCampaign are used to set up
                                    automated emails, workflows, and lead nurturing.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Paid Ad Campaign Mastery */}
                    <div className="col-12 mb-4">
                        <div className="card shadow-sm border-0">
                            <div className="card-body">
                                <h4 className="fw-bold text-success">Paid Ad Campaign Mastery</h4>
                                <p>
                                    Google Ads, Meta Ads (Facebook/Instagram), and Remarketing strategies are
                                     used to create targeted campaigns that deliver high ROI.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
}

export default Advanced;
