function DataAnalitics() {
  return (
    <>
      <style>{`
        @import url('https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css');
        
        .gradient-bg {
          background: linear-gradient(135deg, #fef3c7 0%, #ddd6fe 50%, #fbcfe8 100%);
          min-height: 100vh;
        }
        
        .header-gradient {
          background: linear-gradient(90deg, #f59e0b 0%, #a855f7 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .card-hover {
          transition: all 0.3s ease;
        }
        
        .card-hover:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0,0,0,0.15) !important;
        }
        
        .topic-item {
          transition: transform 0.2s ease;
        }
        
        .topic-item:hover {
          transform: translateX(8px);
        }
      `}</style>

      <div className="gradient-bg py-5">
        <div className="container">
          
          {/* Header */}
          <div className="text-center mb-5">
            <h1 className="display-3 fw-bold header-gradient mb-3">
              Data Analytics Course
            </h1>
            <div className="mx-auto mb-3" style={{width: '120px', height: '4px', background: 'linear-gradient(90deg, #f59e0b, #a855f7)', borderRadius: '10px'}}></div>
            <p className="lead text-secondary">Basic → Advanced</p>
          </div>

          {/* Cards */}
          <div className="row g-4">
            
            {/* Card 1: Data Analytics Fundamentals */}
            <div className="col-12">
              <div className="card shadow card-hover border-0">
                <div className="card-header text-white py-3" style={{background: 'linear-gradient(90deg, #f59e0b, #d97706)'}}>
                  <h2 className="h4 mb-0">
                    <span className="me-2">📊</span>
                    Part 1: Data Analytics Fundamentals
                  </h2>
                </div>
                <div className="card-body p-4">
                  <div className="topic-item mb-3">
                    <span className="fw-bold me-2" style={{color: '#f59e0b'}}>▸</span>
                    <strong style={{color: '#d97706'}}>Introduction to Data Analytics:</strong>
                    <span className="text-secondary"> Data vs Information, Types of Analytics (Descriptive, Diagnostic, Predictive, Prescriptive)</span>
                  </div>
                  <div className="topic-item mb-3">
                    <span className="fw-bold me-2" style={{color: '#f59e0b'}}>▸</span>
                    <strong style={{color: '#d97706'}}>Data Types & Structures:</strong>
                    <span className="text-secondary"> Structured, Semi-Structured, Unstructured Data</span>
                  </div>
                  <div className="topic-item mb-3">
                    <span className="fw-bold me-2" style={{color: '#f59e0b'}}>▸</span>
                    <strong style={{color: '#d97706'}}>Statistics Basics:</strong>
                    <span className="text-secondary"> Mean, Median, Mode, Standard Deviation, Variance</span>
                  </div>
                  <div className="topic-item mb-3">
                    <span className="fw-bold me-2" style={{color: '#f59e0b'}}>▸</span>
                    <strong style={{color: '#d97706'}}>Data Collection Methods:</strong>
                    <span className="text-secondary"> Surveys, Web Scraping, APIs, Sensors, Databases</span>
                  </div>
                  <div className="topic-item mb-0">
                    <span className="fw-bold me-2" style={{color: '#f59e0b'}}>▸</span>
                    <strong style={{color: '#d97706'}}>Analytics Lifecycle:</strong>
                    <span className="text-secondary"> Problem Definition, Data Collection, Analysis, Insights, Action</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2: Excel & Spreadsheet Analytics */}
            <div className="col-12">
              <div className="card shadow card-hover border-0">
                <div className="card-header text-white py-3" style={{background: 'linear-gradient(90deg, #10b981, #059669)'}}>
                  <h2 className="h4 mb-0">
                    <span className="me-2">📈</span>
                    Part 2: Excel & Spreadsheet Analytics
                  </h2>
                </div>
                <div className="card-body p-4">
                  <div className="topic-item mb-3">
                    <span className="fw-bold me-2" style={{color: '#10b981'}}>▸</span>
                    <strong style={{color: '#059669'}}>Excel Basics:</strong>
                    <span className="text-secondary"> Formulas, Functions, Conditional Formatting, Data Validation</span>
                  </div>
                  <div className="topic-item mb-3">
                    <span className="fw-bold me-2" style={{color: '#10b981'}}>▸</span>
                    <strong style={{color: '#059669'}}>Advanced Functions:</strong>
                    <span className="text-secondary"> VLOOKUP, HLOOKUP, INDEX-MATCH, SUMIFS, COUNTIFS</span>
                  </div>
                  <div className="topic-item mb-3">
                    <span className="fw-bold me-2" style={{color: '#10b981'}}>▸</span>
                    <strong style={{color: '#059669'}}>Pivot Tables & Charts:</strong>
                    <span className="text-secondary"> Data Summarization, Grouping, Slicers, Dashboards</span>
                  </div>
                  <div className="topic-item mb-3">
                    <span className="fw-bold me-2" style={{color: '#10b981'}}>▸</span>
                    <strong style={{color: '#059669'}}>Data Analysis Tools:</strong>
                    <span className="text-secondary"> Power Query, Power Pivot, What-If Analysis, Solver</span>
                  </div>
                  <div className="topic-item mb-0">
                    <span className="fw-bold me-2" style={{color: '#10b981'}}>▸</span>
                    <strong style={{color: '#059669'}}>Macros & VBA:</strong>
                    <span className="text-secondary"> Automation, Custom Functions, Data Processing</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3: SQL & Database Analytics */}
            <div className="col-12">
              <div className="card shadow card-hover border-0">
                <div className="card-header text-white py-3" style={{background: 'linear-gradient(90deg, #3b82f6, #2563eb)'}}>
                  <h2 className="h4 mb-0">
                    <span className="me-2">🗄️</span>
                    Part 3: SQL & Database Analytics
                  </h2>
                </div>
                <div className="card-body p-4">
                  <div className="topic-item mb-3">
                    <span className="text-primary fw-bold me-2">▸</span>
                    <strong className="text-primary">SQL Basics:</strong>
                    <span className="text-secondary"> SELECT, WHERE, ORDER BY, GROUP BY, HAVING</span>
                  </div>
                  <div className="topic-item mb-3">
                    <span className="text-primary fw-bold me-2">▸</span>
                    <strong className="text-primary">Joins & Subqueries:</strong>
                    <span className="text-secondary"> INNER JOIN, LEFT/RIGHT JOIN, CROSS JOIN, Nested Queries</span>
                  </div>
                  <div className="topic-item mb-3">
                    <span className="text-primary fw-bold me-2">▸</span>
                    <strong className="text-primary">Aggregate Functions:</strong>
                    <span className="text-secondary"> COUNT, SUM, AVG, MIN, MAX, Window Functions</span>
                  </div>
                  <div className="topic-item mb-3">
                    <span className="text-primary fw-bold me-2">▸</span>
                    <strong className="text-primary">Data Manipulation:</strong>
                    <span className="text-secondary"> INSERT, UPDATE, DELETE, MERGE, Transactions</span>
                  </div>
                  <div className="topic-item mb-0">
                    <span className="text-primary fw-bold me-2">▸</span>
                    <strong className="text-primary">Advanced SQL:</strong>
                    <span className="text-secondary"> CTEs, Recursive Queries, Performance Optimization, Indexes</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 4: Python for Data Analytics */}
            <div className="col-12">
              <div className="card shadow card-hover border-0">
                <div className="card-header text-white py-3" style={{background: 'linear-gradient(90deg, #6366f1, #4f46e5)'}}>
                  <h2 className="h4 mb-0">
                    <span className="me-2">🐍</span>
                    Part 4: Python for Data Analytics
                  </h2>
                </div>
                <div className="card-body p-4">
                  <div className="topic-item mb-3">
                    <span className="fw-bold me-2" style={{color: '#6366f1'}}>▸</span>
                    <strong style={{color: '#4f46e5'}}>Python Basics:</strong>
                    <span className="text-secondary"> Variables, Data Types, Loops, Functions, File I/O</span>
                  </div>
                  <div className="topic-item mb-3">
                    <span className="fw-bold me-2" style={{color: '#6366f1'}}>▸</span>
                    <strong style={{color: '#4f46e5'}}>NumPy & Pandas:</strong>
                    <span className="text-secondary"> Arrays, DataFrames, Data Cleaning, Manipulation, Merging</span>
                  </div>
                  <div className="topic-item mb-3">
                    <span className="fw-bold me-2" style={{color: '#6366f1'}}>▸</span>
                    <strong style={{color: '#4f46e5'}}>Data Visualization:</strong>
                    <span className="text-secondary"> Matplotlib, Seaborn, Plotly, Interactive Dashboards</span>
                  </div>
                  <div className="topic-item mb-3">
                    <span className="fw-bold me-2" style={{color: '#6366f1'}}>▸</span>
                    <strong style={{color: '#4f46e5'}}>Data Analysis Libraries:</strong>
                    <span className="text-secondary"> SciPy, Statsmodels, Scikit-learn Basics</span>
                  </div>
                  <div className="topic-item mb-0">
                    <span className="fw-bold me-2" style={{color: '#6366f1'}}>▸</span>
                    <strong style={{color: '#4f46e5'}}>Web Scraping:</strong>
                    <span className="text-secondary"> BeautifulSoup, Selenium, API Integration, Data Extraction</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 5: Statistical Analysis */}
            <div className="col-12">
              <div className="card shadow card-hover border-0">
                <div className="card-header text-white py-3" style={{background: 'linear-gradient(90deg, #8b5cf6, #7c3aed)'}}>
                  <h2 className="h4 mb-0">
                    <span className="me-2">📉</span>
                    Part 5: Statistical Analysis
                  </h2>
                </div>
                <div className="card-body p-4">
                  <div className="topic-item mb-3">
                    <span className="fw-bold me-2" style={{color: '#8b5cf6'}}>▸</span>
                    <strong style={{color: '#7c3aed'}}>Descriptive Statistics:</strong>
                    <span className="text-secondary"> Measures of Central Tendency, Dispersion, Distribution</span>
                  </div>
                  <div className="topic-item mb-3">
                    <span className="fw-bold me-2" style={{color: '#8b5cf6'}}>▸</span>
                    <strong style={{color: '#7c3aed'}}>Probability & Distributions:</strong>
                    <span className="text-secondary"> Normal, Binomial, Poisson, Chi-Square Distribution</span>
                  </div>
                  <div className="topic-item mb-3">
                    <span className="fw-bold me-2" style={{color: '#8b5cf6'}}>▸</span>
                    <strong style={{color: '#7c3aed'}}>Hypothesis Testing:</strong>
                    <span className="text-secondary"> T-tests, Z-tests, ANOVA, Chi-Square Tests, P-value</span>
                  </div>
                  <div className="topic-item mb-3">
                    <span className="fw-bold me-2" style={{color: '#8b5cf6'}}>▸</span>
                    <strong style={{color: '#7c3aed'}}>Regression Analysis:</strong>
                    <span className="text-secondary"> Linear Regression, Multiple Regression, Logistic Regression</span>
                  </div>
                  <div className="topic-item mb-0">
                    <span className="fw-bold me-2" style={{color: '#8b5cf6'}}>▸</span>
                    <strong style={{color: '#7c3aed'}}>Correlation & Causation:</strong>
                    <span className="text-secondary"> Pearson, Spearman Correlation, Causality Analysis</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 6: Data Visualization & BI Tools */}
            <div className="col-12">
              <div className="card shadow card-hover border-0">
                <div className="card-header text-white py-3" style={{background: 'linear-gradient(90deg, #ec4899, #db2777)'}}>
                  <h2 className="h4 mb-0">
                    <span className="me-2">📊</span>
                    Part 6: Data Visualization & BI Tools
                  </h2>
                </div>
                <div className="card-body p-4">
                  <div className="topic-item mb-3">
                    <span className="fw-bold me-2" style={{color: '#ec4899'}}>▸</span>
                    <strong style={{color: '#db2777'}}>Tableau:</strong>
                    <span className="text-secondary"> Connecting Data, Creating Dashboards, Filters, Parameters, Calculations</span>
                  </div>
                  <div className="topic-item mb-3">
                    <span className="fw-bold me-2" style={{color: '#ec4899'}}>▸</span>
                    <strong style={{color: '#db2777'}}>Power BI:</strong>
                    <span className="text-secondary"> Data Modeling, DAX, Power Query, Interactive Reports</span>
                  </div>
                  <div className="topic-item mb-3">
                    <span className="fw-bold me-2" style={{color: '#ec4899'}}>▸</span>
                    <strong style={{color: '#db2777'}}>Visualization Best Practices:</strong>
                    <span className="text-secondary"> Chart Selection, Color Theory, Storytelling with Data</span>
                  </div>
                  <div className="topic-item mb-3">
                    <span className="fw-bold me-2" style={{color: '#ec4899'}}>▸</span>
                    <strong style={{color: '#db2777'}}>Dashboard Design:</strong>
                    <span className="text-secondary"> KPIs, Metrics, Layout, User Experience, Interactivity</span>
                  </div>
                  <div className="topic-item mb-0">
                    <span className="fw-bold me-2" style={{color: '#ec4899'}}>▸</span>
                    <strong style={{color: '#db2777'}}>Other Tools:</strong>
                    <span className="text-secondary"> Looker, QlikView, Google Data Studio, D3.js</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 7: Big Data & Advanced Analytics */}
            <div className="col-12">
              <div className="card shadow card-hover border-0">
                <div className="card-header text-white py-3" style={{background: 'linear-gradient(90deg, #14b8a6, #0d9488)'}}>
                  <h2 className="h4 mb-0">
                    <span className="me-2">🔥</span>
                    Part 7: Big Data & Advanced Analytics
                  </h2>
                </div>
                <div className="card-body p-4">
                  <div className="topic-item mb-3">
                    <span className="fw-bold me-2" style={{color: '#14b8a6'}}>▸</span>
                    <strong style={{color: '#0d9488'}}>Big Data Fundamentals:</strong>
                    <span className="text-secondary"> Hadoop, MapReduce, HDFS, Distributed Computing</span>
                  </div>
                  <div className="topic-item mb-3">
                    <span className="fw-bold me-2" style={{color: '#14b8a6'}}>▸</span>
                    <strong style={{color: '#0d9488'}}>Apache Spark:</strong>
                    <span className="text-secondary"> RDDs, DataFrames, Spark SQL, PySpark</span>
                  </div>
                  <div className="topic-item mb-3">
                    <span className="fw-bold me-2" style={{color: '#14b8a6'}}>▸</span>
                    <strong style={{color: '#0d9488'}}>Data Warehousing:</strong>
                    <span className="text-secondary"> ETL Processes, Snowflake, Redshift, BigQuery</span>
                  </div>
                  <div className="topic-item mb-3">
                    <span className="fw-bold me-2" style={{color: '#14b8a6'}}>▸</span>
                    <strong style={{color: '#0d9488'}}>Machine Learning Basics:</strong>
                    <span className="text-secondary"> Supervised/Unsupervised Learning, Model Evaluation, Feature Engineering</span>
                  </div>
                  <div className="topic-item mb-0">
                    <span className="fw-bold me-2" style={{color: '#14b8a6'}}>▸</span>
                    <strong style={{color: '#0d9488'}}>Real-Time Analytics:</strong>
                    <span className="text-secondary"> Stream Processing, Kafka, Real-time Dashboards</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 8: Career & Certifications */}
            <div className="col-12">
              <div className="card shadow card-hover border-0">
                <div className="card-header text-white py-3" style={{background: 'linear-gradient(90deg, #f97316, #ea580c)'}}>
                  <h2 className="h4 mb-0">
                    <span className="me-2">🎓</span>
                    Part 8: Career Path & Certifications
                  </h2>
                </div>
                <div className="card-body p-4">
                  <div className="topic-item mb-3">
                    <span className="fw-bold me-2" style={{color: '#f97316'}}>▸</span>
                    <strong style={{color: '#ea580c'}}>Industry Domains:</strong>
                    <span className="text-secondary"> Finance, Healthcare, E-commerce, Marketing, Operations</span>
                  </div>
                  <div className="topic-item mb-3">
                    <span className="fw-bold me-2" style={{color: '#f97316'}}>▸</span>
                    <strong style={{color: '#ea580c'}}>Key Certifications:</strong>
                    <span className="text-secondary"> Google Data Analytics, Microsoft Certified, Tableau Desktop Specialist</span>
                  </div>
                  <div className="topic-item mb-3">
                    <span className="fw-bold me-2" style={{color: '#f97316'}}>▸</span>
                    <strong style={{color: '#ea580c'}}>Career Roles:</strong>
                    <span className="text-secondary"> Data Analyst, Business Analyst, Analytics Consultant, BI Developer</span>
                  </div>
                  <div className="topic-item mb-3">
                    <span className="fw-bold me-2" style={{color: '#f97316'}}>▸</span>
                    <strong style={{color: '#ea580c'}}>Portfolio Building:</strong>
                    <span className="text-secondary"> Case Studies, GitHub Projects, Kaggle Competitions, Blog Writing</span>
                  </div>
                  <div className="topic-item mb-0">
                    <span className="fw-bold me-2" style={{color: '#f97316'}}>▸</span>
                    <strong style={{color: '#ea580c'}}>Interview Preparation:</strong>
                    <span className="text-secondary"> SQL Questions, Case Studies, Business Problems, Behavioral Questions</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Footer */}
          <div className="text-center mt-5">
            <p className="text-muted">
              <small>📊 Complete Data Analytics Curriculum • Basic to Advanced</small>
            </p>
          </div>

        </div>
      </div>
    </>
  );
}

export default DataAnalitics;