function Cloud() {
  return (
    <>
      <style>{`
        @import url('https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css');
        
        .gradient-bg {
          background: linear-gradient(135deg, #dbeafe 0%, #e0e7ff 50%, #f3e8ff 100%);
          min-height: 100vh;
        }
        
        .header-gradient {
          background: linear-gradient(90deg, #0ea5e9 0%, #8b5cf6 100%);
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
              Cloud Computing Course
            </h1>
            <div className="mx-auto mb-3" style={{width: '120px', height: '4px', background: 'linear-gradient(90deg, #0ea5e9, #8b5cf6)', borderRadius: '10px'}}></div>
            <p className="lead text-secondary">Basic → Advanced</p>
          </div>

          {/* Cards */}
          <div className="row g-4">
            
            {/* Card 1: Cloud Fundamentals */}
            <div className="col-12">
              <div className="card shadow card-hover border-0">
                <div className="card-header text-white py-3" style={{background: 'linear-gradient(90deg, #0ea5e9, #0284c7)'}}>
                  <h2 className="h4 mb-0">
                    <span className="me-2">☁️</span>
                    Part 1: Cloud Computing Fundamentals
                  </h2>
                </div>
                <div className="card-body p-4">
                  <div className="topic-item mb-3">
                    <span className="fw-bold me-2" style={{color: '#0ea5e9'}}>▸</span>
                    <strong style={{color: '#0284c7'}}>Cloud Basics:</strong>
                    <span className="text-secondary"> What is Cloud Computing, Benefits, Characteristics</span>
                  </div>
                  <div className="topic-item mb-3">
                    <span className="fw-bold me-2" style={{color: '#0ea5e9'}}>▸</span>
                    <strong style={{color: '#0284c7'}}>Service Models:</strong>
                    <span className="text-secondary"> IaaS, PaaS, SaaS, FaaS (Serverless)</span>
                  </div>
                  <div className="topic-item mb-3">
                    <span className="fw-bold me-2" style={{color: '#0ea5e9'}}>▸</span>
                    <strong style={{color: '#0284c7'}}>Deployment Models:</strong>
                    <span className="text-secondary"> Public Cloud, Private Cloud, Hybrid Cloud, Multi-Cloud</span>
                  </div>
                  <div className="topic-item mb-3">
                    <span className="fw-bold me-2" style={{color: '#0ea5e9'}}>▸</span>
                    <strong style={{color: '#0284c7'}}>Cloud Providers:</strong>
                    <span className="text-secondary"> AWS, Azure, Google Cloud Platform (GCP), Oracle Cloud</span>
                  </div>
                  <div className="topic-item mb-0">
                    <span className="fw-bold me-2" style={{color: '#0ea5e9'}}>▸</span>
                    <strong style={{color: '#0284c7'}}>Cloud Architecture:</strong>
                    <span className="text-secondary"> Regions, Availability Zones, Edge Locations</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2: AWS Services */}
            <div className="col-12">
              <div className="card shadow card-hover border-0">
                <div className="card-header text-white py-3" style={{background: 'linear-gradient(90deg, #f59e0b, #d97706)'}}>
                  <h2 className="h4 mb-0">
                    <span className="me-2">🟠</span>
                    Part 2: Amazon Web Services (AWS)
                  </h2>
                </div>
                <div className="card-body p-4">
                  <div className="topic-item mb-3">
                    <span className="fw-bold me-2" style={{color: '#f59e0b'}}>▸</span>
                    <strong style={{color: '#d97706'}}>Compute Services:</strong>
                    <span className="text-secondary"> EC2, Lambda, ECS, EKS, Elastic Beanstalk</span>
                  </div>
                  <div className="topic-item mb-3">
                    <span className="fw-bold me-2" style={{color: '#f59e0b'}}>▸</span>
                    <strong style={{color: '#d97706'}}>Storage Services:</strong>
                    <span className="text-secondary"> S3, EBS, EFS, Glacier, Storage Gateway</span>
                  </div>
                  <div className="topic-item mb-3">
                    <span className="fw-bold me-2" style={{color: '#f59e0b'}}>▸</span>
                    <strong style={{color: '#d97706'}}>Database Services:</strong>
                    <span className="text-secondary"> RDS, DynamoDB, Aurora, Redshift, ElastiCache</span>
                  </div>
                  <div className="topic-item mb-3">
                    <span className="fw-bold me-2" style={{color: '#f59e0b'}}>▸</span>
                    <strong style={{color: '#d97706'}}>Networking:</strong>
                    <span className="text-secondary"> VPC, Route 53, CloudFront, API Gateway, Direct Connect</span>
                  </div>
                  <div className="topic-item mb-0">
                    <span className="fw-bold me-2" style={{color: '#f59e0b'}}>▸</span>
                    <strong style={{color: '#d97706'}}>Management Tools:</strong>
                    <span className="text-secondary"> CloudWatch, CloudTrail, IAM, CloudFormation</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3: Microsoft Azure */}
            <div className="col-12">
              <div className="card shadow card-hover border-0">
                <div className="card-header text-white py-3" style={{background: 'linear-gradient(90deg, #3b82f6, #2563eb)'}}>
                  <h2 className="h4 mb-0">
                    <span className="me-2">🔵</span>
                    Part 3: Microsoft Azure
                  </h2>
                </div>
                <div className="card-body p-4">
                  <div className="topic-item mb-3">
                    <span className="text-primary fw-bold me-2">▸</span>
                    <strong className="text-primary">Compute Services:</strong>
                    <span className="text-secondary"> Virtual Machines, App Service, Azure Functions, AKS</span>
                  </div>
                  <div className="topic-item mb-3">
                    <span className="text-primary fw-bold me-2">▸</span>
                    <strong className="text-primary">Storage Services:</strong>
                    <span className="text-secondary"> Blob Storage, File Storage, Disk Storage, Data Lake</span>
                  </div>
                  <div className="topic-item mb-3">
                    <span className="text-primary fw-bold me-2">▸</span>
                    <strong className="text-primary">Database Services:</strong>
                    <span className="text-secondary"> SQL Database, Cosmos DB, PostgreSQL, MySQL</span>
                  </div>
                  <div className="topic-item mb-3">
                    <span className="text-primary fw-bold me-2">▸</span>
                    <strong className="text-primary">Networking:</strong>
                    <span className="text-secondary"> Virtual Network, Load Balancer, VPN Gateway, CDN</span>
                  </div>
                  <div className="topic-item mb-0">
                    <span className="text-primary fw-bold me-2">▸</span>
                    <strong className="text-primary">AI & ML:</strong>
                    <span className="text-secondary"> Azure AI, Machine Learning, Cognitive Services</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 4: Google Cloud Platform */}
            <div className="col-12">
              <div className="card shadow card-hover border-0">
                <div className="card-header text-white py-3" style={{background: 'linear-gradient(90deg, #ef4444, #dc2626)'}}>
                  <h2 className="h4 mb-0">
                    <span className="me-2">🔴</span>
                    Part 4: Google Cloud Platform (GCP)
                  </h2>
                </div>
                <div className="card-body p-4">
                  <div className="topic-item mb-3">
                    <span className="text-danger fw-bold me-2">▸</span>
                    <strong className="text-danger">Compute Services:</strong>
                    <span className="text-secondary"> Compute Engine, App Engine, Cloud Functions, GKE</span>
                  </div>
                  <div className="topic-item mb-3">
                    <span className="text-danger fw-bold me-2">▸</span>
                    <strong className="text-danger">Storage Services:</strong>
                    <span className="text-secondary"> Cloud Storage, Persistent Disk, Filestore</span>
                  </div>
                  <div className="topic-item mb-3">
                    <span className="text-danger fw-bold me-2">▸</span>
                    <strong className="text-danger">Database Services:</strong>
                    <span className="text-secondary"> Cloud SQL, Firestore, BigTable, Spanner, BigQuery</span>
                  </div>
                  <div className="topic-item mb-3">
                    <span className="text-danger fw-bold me-2">▸</span>
                    <strong className="text-danger">Networking:</strong>
                    <span className="text-secondary"> VPC, Cloud Load Balancing, Cloud CDN, Cloud DNS</span>
                  </div>
                  <div className="topic-item mb-0">
                    <span className="text-danger fw-bold me-2">▸</span>
                    <strong className="text-danger">Big Data & ML:</strong>
                    <span className="text-secondary"> BigQuery, Dataflow, Dataproc, AI Platform</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 5: Cloud Security */}
            <div className="col-12">
              <div className="card shadow card-hover border-0">
                <div className="card-header text-white py-3" style={{background: 'linear-gradient(90deg, #8b5cf6, #7c3aed)'}}>
                  <h2 className="h4 mb-0">
                    <span className="me-2">🔒</span>
                    Part 5: Cloud Security
                  </h2>
                </div>
                <div className="card-body p-4">
                  <div className="topic-item mb-3">
                    <span className="fw-bold me-2" style={{color: '#8b5cf6'}}>▸</span>
                    <strong style={{color: '#7c3aed'}}>Identity & Access Management:</strong>
                    <span className="text-secondary"> IAM, RBAC, MFA, SSO, Federation</span>
                  </div>
                  <div className="topic-item mb-3">
                    <span className="fw-bold me-2" style={{color: '#8b5cf6'}}>▸</span>
                    <strong style={{color: '#7c3aed'}}>Data Security:</strong>
                    <span className="text-secondary"> Encryption (at rest & in transit), KMS, Key Vault</span>
                  </div>
                  <div className="topic-item mb-3">
                    <span className="fw-bold me-2" style={{color: '#8b5cf6'}}>▸</span>
                    <strong style={{color: '#7c3aed'}}>Network Security:</strong>
                    <span className="text-secondary"> Security Groups, NACLs, Firewalls, DDoS Protection</span>
                  </div>
                  <div className="topic-item mb-3">
                    <span className="fw-bold me-2" style={{color: '#8b5cf6'}}>▸</span>
                    <strong style={{color: '#7c3aed'}}>Compliance:</strong>
                    <span className="text-secondary"> GDPR, HIPAA, PCI-DSS, SOC 2, ISO 27001</span>
                  </div>
                  <div className="topic-item mb-0">
                    <span className="fw-bold me-2" style={{color: '#8b5cf6'}}>▸</span>
                    <strong style={{color: '#7c3aed'}}>Security Monitoring:</strong>
                    <span className="text-secondary"> CloudTrail, Security Center, Guard Duty, Sentinel</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 6: DevOps & Automation */}
            <div className="col-12">
              <div className="card shadow card-hover border-0">
                <div className="card-header text-white py-3" style={{background: 'linear-gradient(90deg, #10b981, #059669)'}}>
                  <h2 className="h4 mb-0">
                    <span className="me-2">⚙️</span>
                    Part 6: Cloud DevOps & Automation
                  </h2>
                </div>
                <div className="card-body p-4">
                  <div className="topic-item mb-3">
                    <span className="fw-bold me-2" style={{color: '#10b981'}}>▸</span>
                    <strong style={{color: '#059669'}}>Infrastructure as Code:</strong>
                    <span className="text-secondary"> Terraform, CloudFormation, ARM Templates, Pulumi</span>
                  </div>
                  <div className="topic-item mb-3">
                    <span className="fw-bold me-2" style={{color: '#10b981'}}>▸</span>
                    <strong style={{color: '#059669'}}>CI/CD Pipelines:</strong>
                    <span className="text-secondary"> Jenkins, GitHub Actions, Azure DevOps, GitLab CI</span>
                  </div>
                  <div className="topic-item mb-3">
                    <span className="fw-bold me-2" style={{color: '#10b981'}}>▸</span>
                    <strong style={{color: '#059669'}}>Configuration Management:</strong>
                    <span className="text-secondary"> Ansible, Chef, Puppet, SaltStack</span>
                  </div>
                  <div className="topic-item mb-3">
                    <span className="fw-bold me-2" style={{color: '#10b981'}}>▸</span>
                    <strong style={{color: '#059669'}}>Containers & Orchestration:</strong>
                    <span className="text-secondary"> Docker, Kubernetes, ECS, AKS, GKE</span>
                  </div>
                  <div className="topic-item mb-0">
                    <span className="fw-bold me-2" style={{color: '#10b981'}}>▸</span>
                    <strong style={{color: '#059669'}}>Monitoring & Logging:</strong>
                    <span className="text-secondary"> Prometheus, Grafana, ELK Stack, CloudWatch</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 7: Cloud Architecture & Design */}
            <div className="col-12">
              <div className="card shadow card-hover border-0">
                <div className="card-header text-white py-3" style={{background: 'linear-gradient(90deg, #14b8a6, #0d9488)'}}>
                  <h2 className="h4 mb-0">
                    <span className="me-2">🏗️</span>
                    Part 7: Cloud Architecture & Design Patterns
                  </h2>
                </div>
                <div className="card-body p-4">
                  <div className="topic-item mb-3">
                    <span className="fw-bold me-2" style={{color: '#14b8a6'}}>▸</span>
                    <strong style={{color: '#0d9488'}}>Architecture Patterns:</strong>
                    <span className="text-secondary"> Microservices, Serverless, Event-Driven, SOA</span>
                  </div>
                  <div className="topic-item mb-3">
                    <span className="fw-bold me-2" style={{color: '#14b8a6'}}>▸</span>
                    <strong style={{color: '#0d9488'}}>High Availability:</strong>
                    <span className="text-secondary"> Load Balancing, Auto Scaling, Fault Tolerance</span>
                  </div>
                  <div className="topic-item mb-3">
                    <span className="fw-bold me-2" style={{color: '#14b8a6'}}>▸</span>
                    <strong style={{color: '#0d9488'}}>Disaster Recovery:</strong>
                    <span className="text-secondary"> Backup Strategies, RTO/RPO, Multi-Region Deployment</span>
                  </div>
                  <div className="topic-item mb-3">
                    <span className="fw-bold me-2" style={{color: '#14b8a6'}}>▸</span>
                    <strong style={{color: '#0d9488'}}>Performance Optimization:</strong>
                    <span className="text-secondary"> Caching, CDN, Database Optimization, Cost Optimization</span>
                  </div>
                  <div className="topic-item mb-0">
                    <span className="fw-bold me-2" style={{color: '#14b8a6'}}>▸</span>
                    <strong style={{color: '#0d9488'}}>Well-Architected Framework:</strong>
                    <span className="text-secondary"> Security, Reliability, Performance, Cost, Sustainability</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 8: Advanced Cloud Topics */}
            <div className="col-12">
              <div className="card shadow card-hover border-0">
                <div className="card-header text-white py-3" style={{background: 'linear-gradient(90deg, #f97316, #ea580c)'}}>
                  <h2 className="h4 mb-0">
                    <span className="me-2">🚀</span>
                    Part 8: Advanced Cloud Topics & Certifications
                  </h2>
                </div>
                <div className="card-body p-4">
                  <div className="topic-item mb-3">
                    <span className="fw-bold me-2" style={{color: '#f97316'}}>▸</span>
                    <strong style={{color: '#ea580c'}}>Serverless Computing:</strong>
                    <span className="text-secondary"> Lambda, Azure Functions, Cloud Functions, Event Processing</span>
                  </div>
                  <div className="topic-item mb-3">
                    <span className="fw-bold me-2" style={{color: '#f97316'}}>▸</span>
                    <strong style={{color: '#ea580c'}}>Cloud Native Development:</strong>
                    <span className="text-secondary"> 12-Factor Apps, Service Mesh, Istio, API Management</span>
                  </div>
                  <div className="topic-item mb-3">
                    <span className="fw-bold me-2" style={{color: '#f97316'}}>▸</span>
                    <strong style={{color: '#ea580c'}}>AI/ML in Cloud:</strong>
                    <span className="text-secondary"> SageMaker, Azure ML, Vertex AI, ML Pipelines</span>
                  </div>
                  <div className="topic-item mb-3">
                    <span className="fw-bold me-2" style={{color: '#f97316'}}>▸</span>
                    <strong style={{color: '#ea580c'}}>Certifications:</strong>
                    <span className="text-secondary"> AWS Solutions Architect, Azure Administrator, GCP Professional</span>
                  </div>
                  <div className="topic-item mb-0">
                    <span className="fw-bold me-2" style={{color: '#f97316'}}>▸</span>
                    <strong style={{color: '#ea580c'}}>Career Path:</strong>
                    <span className="text-secondary"> Cloud Engineer, Cloud Architect, DevOps Engineer, SRE</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Footer */}
          <div className="text-center mt-5">
            <p className="text-muted">
              <small>☁️ Complete Cloud Computing Curriculum • Basic to Advanced</small>
            </p>
          </div>

        </div>
      </div>
    </>
  );
}

export default Cloud;