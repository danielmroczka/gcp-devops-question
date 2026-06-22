## Section 1: Bootstrapping and maintaining a Google Cloud organization (~15% of the exam)

### 1.1 Designing the overall resource hierarchy for an organization

- **Projects and folders**[1]
  - Dokumentacja: [Google Cloud resource hierarchy (Shared VPC doc odwołuje się do hierarchy)](https://docs.cloud.google.com/vpc/docs/shared-vpc)  
[2]

- **Shared networking**[1]
  - Dokumentacja: [Shared VPC | Virtual Private Cloud](https://docs.cloud.google.com/vpc/docs/shared-vpc)  
[3][2]

- **Multi-project monitoring and logging**[1]
  - Dokumentacja: [Metrics scopes overview – multi‑project monitoring](https://docs.cloud.google.com/monitoring/settings)  
[4]
  - Dokumentacja: [Cloud Logging overview](https://docs.cloud.google.com/logging/docs/overview)  
[5]

- **Identity and Access Management (IAM) roles and organization-level policies**[1]
  - Dokumentacja: [Service accounts overview](https://docs.cloud.google.com/iam/docs/service-account-overview)  
[6]
  - Dokumentacja: [Best practices for using service accounts](https://cloud.google.com/iam/docs/best-practices-service-accounts)  
[7]

- **Creating and managing service accounts**[1]
  - Dokumentacja: [Create service accounts](https://docs.cloud.google.com/iam/docs/service-accounts-create)  
[8]
  - Dokumentacja (CLI): [`gcloud iam service-accounts create`](https://cloud.google.com/sdk/gcloud/reference/iam/service-accounts/create)  
[9]

- **Organizing resources by using an application-centric approach (e.g., App Hub)**[1]
  - Dokumentacja: [App Hub documentation](https://docs.cloud.google.com/app-hub/docs)  
[10][11]

***

### 1.2 Managing infrastructure

- **Infrastructure-as-code tooling (e.g., Cloud Foundation Toolkit, Config Connector, Terraform, Helm)**[1]
  - Dokumentacja: [Terraform on Google Cloud](https://docs.cloud.google.com/docs/terraform)  
[12]
  - Dokumentacja: [Cloud Foundation Toolkit](https://cloud.google.com/foundation-toolkit)  
[13][14][15]
  - Dokumentacja: [Config Connector documentation](https://cloud.google.com/config-connector/docs)  
[16][17]

- **Making infrastructure changes using Google-recommended practices and blueprints**[1]
  - Dokumentacja: [Terraform blueprints & Cloud Foundation Toolkit templates](https://docs.cloud.google.com/deployment-manager/docs/reference/cloud-foundation-toolkit)  
[14][15]

- **Automation with scripting (e.g., Python, Go)**[1]
  - Dokumentacja: [Infrastructure as code – overview](https://docs.cloud.google.com/docs/iac)  
[18]

***

### 1.3 Designing a CI/CD architecture stack in Google Cloud, hybrid, and multi-cloud environments

- **Continuous integration (CI) with Cloud Build**[1]
  - Dokumentacja: [Cloud Build documentation](https://docs.cloud.google.com/build/docs)  
[19][20]

- **Continuous delivery (CD) with Cloud Deploy, including Kustomize and Skaffold**[1]
  - Dokumentacja: [Cloud Deploy – overview](https://cloud.google.com/deploy)  
[21][22]
  - Dokumentacja: [Use Skaffold with Cloud Deploy](https://docs.cloud.google.com/deploy/docs/using-skaffold)  
[23]
  - Dokumentacja: [Skaffold docs](https://skaffold.dev/docs/)  
[24]

- **Widely used third-party tooling (e.g., Jenkins, Git, Argo CD, Packer)**[1]
  - Dokumentacja: [Skaffold docs – integracja z zewnętrznymi systemami](https://skaffold.dev/docs/)  
[24]

- **Security of CI/CD tooling**[1]
  - Dokumentacja: [Artifact Registry overview – image & artifact security](https://docs.cloud.google.com/artifact-registry/docs/overview)  
[25][26]

***

### 1.4 Managing multiple environments (e.g., staging, production)

- **Determining the number of environments and their purpose**[1]
  - Dokumentacja: [Cloud Deploy – multi‑environment delivery pipelines](https://cloud.google.com/deploy)  
[21]

- **Managing ephemeral environments**[1]
  - Dokumentacja: [Use Skaffold with Cloud Deploy – per‑branch / per‑target envs](https://docs.cloud.google.com/deploy/docs/using-skaffold)  
[23]

- **Configuration and policy management**[1]
  - Dokumentacja: [Config Connector – policy-compliant resources](https://cloud.google.com/config-connector/docs)  
[27][16]

- **Managing Google Kubernetes Engine (GKE) clusters across an enterprise**[1]
  - Dokumentacja: [GKE documentation](https://cloud.google.com/kubernetes-engine/docs)  
[28][29]

- **Safe and secure patching and upgrading practices**[1]
  - Dokumentacja: [GKE – cluster upgrades, node management](https://cloud.google.com/kubernetes-engine/docs)  
[28]

***

### 1.5 Enabling secure cloud development environments

- **Configuring and managing cloud development environments (e.g., Cloud Workstations, Cloud Shell)**[1]
  - Dokumentacja: [Cloud Workstations documentation](https://docs.cloud.google.com/workstations/docs)  
[30][31]
  - Dokumentacja: [Cloud Shell documentation](https://docs.cloud.google.com/shell/docs)  
[32][33]

- **Bootstrapping environments with required tooling (e.g., custom images, IDE, Cloud SDK)**[1]
  - Dokumentacja: [Cloud Shell – how it works, preinstalled tools, SDK](https://docs.cloud.google.com/shell/docs/how-cloud-shell-works)  
[33]

- **Leveraging AI to assist with development and operations (e.g., Cloud Code, Gemini Code Assist)**[1]
  - Dokumentacja: [Cloud Code for VS Code documentation](https://docs.cloud.google.com/code/docs/vscode)  
[34][35]

***

## Section 2: Building and implementing CI/CD pipelines for applications and infrastructure (~27% of the exam)

### 2.1 Designing and managing CI/CD pipelines

- **Artifact management with Artifact Registry**[1]
  - Dokumentacja: [Artifact Registry overview](https://docs.cloud.google.com/artifact-registry/docs/overview)  
[25]

- **Deployment to hybrid and multi-cloud environments (e.g., GKE Enterprise)**[1]
  - Dokumentacja: [Cloud Service Mesh overview – multi‑cluster / multi‑cloud](https://docs.cloud.google.com/service-mesh/docs/overview)  
[36]
  - Dokumentacja: [GKE documentation (w tym GKE Enterprise)](https://cloud.google.com/kubernetes-engine/docs)  
[28]

- **CI/CD pipeline triggers**[1]
  - Dokumentacja: [Cloud Build – triggers](https://docs.cloud.google.com/build/docs)  
[19]

- **Testing a new application version in the pipeline**[1]
  - Dokumentacja: [Cloud Deploy – rollout, promotion and verification](https://cloud.google.com/deploy)  
[21]

- **Configuring deployment processes (e.g., approval flows)**[1]
  - Dokumentacja: [Cloud Deploy – approvals & promotion flows](https://cloud.google.com/deploy)  
[21]

- **CI/CD of serverless applications**[1]
  - Dokumentacja: [Cloud Build – build & deploy serverless](https://cloud.google.com/build)  
[37]

- **Applying CI/CD practices to infrastructure (e.g., GKE clusters, managed instance groups, Cloud Service Mesh configuration)**[1]
  - Dokumentacja: [Terraform on Google Cloud](https://docs.cloud.google.com/docs/terraform)  
[12]
  - Dokumentacja: [Cloud Service Mesh overview](https://docs.cloud.google.com/service-mesh/docs/overview)  
[36]

***

### 2.2 Implementing CI/CD pipelines

- **Auditing and tracking deployments (e.g., Artifact Registry, Cloud Build, Cloud Deploy, Cloud Audit Logs)**[1]
  - Dokumentacja: [Cloud Build docs – build history & logs](https://docs.cloud.google.com/build/docs)  
[19]
  - Dokumentacja: [Cloud Audit Logs overview](https://docs.cloud.google.com/logging/docs/audit)  
[38]

- **Deployment strategies (e.g., canary, blue/green, rolling, traffic splitting)**[1]
  - Dokumentacja: [Cloud Deploy – strategies & rollouts](https://cloud.google.com/deploy)  
[21]

- **Troubleshooting and mitigating deployment issues**[1]
  - Dokumentacja: [Cloud Deploy documentation – troubleshooting deployments](https://cloud.google.com/deploy)  
[21]

***

### 2.3 Managing CI/CD configuration and secrets

- **Key management (e.g., Cloud Key Management Service)**[1]
  - Dokumentacja: [Cloud Key Management Service documentation](https://cloud.google.com/kms/docs)  
[39]

- **Secret management (e.g., Secret Manager, Certificate Manager)**[1]
  - Dokumentacja: [Secret Manager documentation](https://docs.cloud.google.com/secret-manager/docs)  
[40][41]
  - Dokumentacja: [Certificate Manager overview](https://docs.cloud.google.com/certificate-manager/docs/overview)  
[42]

- **Build versus runtime secret injection**[1]
  - Dokumentacja: [Secret Manager – create & access secrets](https://docs.cloud.google.com/secret-manager/docs/create-secret-quickstart)  
[41]

***

### 2.4 Securing the CI/CD deployment pipeline

- **Vulnerability analysis with Artifact Registry**[1]
  - Dokumentacja: [Artifact Registry overview – vulnerability scanning](https://docs.cloud.google.com/artifact-registry/docs/overview)  
[25]

- **Software supply chain security (e.g., Binary Authorization, SLSA framework)**[1]
  - Dokumentacja: [Binary Authorization documentation](https://cloud.google.com/binary-authorization/docs)  
[43][44]

- **IAM policies based on environment**[1]
  - Dokumentacja: [Binary Authorization – set up for GKE (IAM per env)](https://docs.cloud.google.com/binary-authorization/docs/setting-up)  
[45]

***

## Section 3: Applying site reliability engineering practices to applications (~23% of the exam)

### 3.1 Balancing change, velocity, and reliability of the service

- **Defining SLIs (e.g., availability, latency), SLOs, and SLAs**[1]
  - Dokumentacja: [Service level objectives overview](https://docs.cloud.google.com/service-mesh/legacy/in-cluster/observability/slo-overview)  
[46]
  - Dokumentacja: [SLO monitoring in Cloud Monitoring](https://cloud.google.com/monitoring/slo-monitoring)  
[47]

- **Error budgets**[1]
  - Dokumentacja: [SLO monitoring – error budget alerts](https://cloud.google.com/monitoring/slo-monitoring)  
[47]
  - Książki SRE: [SRE Books – rozdziały o SLO i error budgets](https://sre.google/resources/book-update/)  
[48]

- **Opportunity cost of risk and reliability (e.g., number of “nines”)**[1]
  - Książki SRE: [Site Reliability Engineering & Workbook](https://sre.google/resources/book-update/)  
[49][48]

***

### 3.2 Managing service lifecycle

- **Service management (e.g., introduction of a new service by using a pre-service onboarding checklist, launch plan, or deployment plan, deployment, maintenance, and retirement)**[1]
  - Dokumentacja: [App Hub – application-centric view of services](https://docs.cloud.google.com/app-hub/docs/overview)  
[11]
  - Książki SRE: rozdziały o „Service Lifecycle” i „Production Environment”[48]

- **Capacity planning (e.g., quotas, limits)**[1]
  - Dokumentacja: [Cloud Monitoring – utilization metrics](https://docs.cloud.google.com/monitoring/docs)  
[50]

- **Autoscaling (e.g., managed instance groups, Cloud Run, GKE)**[1]
  - Dokumentacja: [Cloud Monitoring – autoscaling metrics](https://cloud.google.com/monitoring)  
[51]
  - Dokumentacja: [VPC / resource docs – autoscaler templates z CFT](https://docs.cloud.google.com/deployment-manager/docs/reference/cloud-foundation-toolkit)  
[15]

***

### 3.3 Mitigating incident impact on users

- **Draining/redirecting traffic**[1]
  - Dokumentacja: [Cloud Deploy – traffic management / rollbacks](https://cloud.google.com/deploy)  
[21]

- **Adding capacity**[1]
  - Dokumentacja: [Cloud Monitoring – kłuczowe metryki do decyzji capacity](https://docs.cloud.google.com/monitoring/docs)  
[50]

- **Rollback strategies**[1]
  - Dokumentacja: [Cloud Deploy – rollbacks and strategies](https://cloud.google.com/deploy)  
[21]

***

## Section 4: Implementing observability practices (~20% of the exam)

### 4.1 Managing logs

- **Collecting and importing logs (e.g., Cloud Logging agent, Cloud Audit Logs, VPC Flow Logs, Cloud Service Mesh)**[1]
  - Dokumentacja: [Cloud Logging overview](https://docs.cloud.google.com/logging/docs/overview)  
[5]
  - Dokumentacja: [Cloud Audit Logs overview](https://docs.cloud.google.com/logging/docs/audit)  
[38]
  - Dokumentacja: [VPC Flow Logs](https://docs.cloud.google.com/vpc/docs/flow-logs)  
[52]
  - Dokumentacja: [Cloud Service Mesh overview – telemetry](https://docs.cloud.google.com/service-mesh/docs/overview)  
[36]

- **Logging optimization (e.g., filtering, sampling, exclusions, cost, source considerations)**[1]
  - Dokumentacja: [Cloud Logging overview – filtering, exclusions](https://docs.cloud.google.com/logging/docs/overview)  
[5]

- **Exporting logs (e.g., BigQuery, Pub/Sub, for auditing)**[1]
  - Dokumentacja: [Cloud Logging docs – exports](https://docs.cloud.google.com/logging/docs)  
[53]

- **Retaining logs**[1]
  - Dokumentacja: [Cloud Logging docs – retention and storage](https://docs.cloud.google.com/logging/docs)  
[53]

- **Analyzing logs**[1]
  - Dokumentacja: [Cloud Logging – Logs Explorer](https://docs.cloud.google.com/logging/docs)  
[53]

- **Handling sensitive data (e.g., PII, PHI)**[1]
  - Dokumentacja: [Cloud Logging overview – handling sensitive data](https://docs.cloud.google.com/logging/docs/overview)  
[5]

***

### 4.2 Managing metrics

- **Collecting and analyzing metrics (e.g., application, platform, networking, Cloud Service Mesh, Google Cloud Managed Service for Prometheus, hybrid/multi-cloud)**[1]
  - Dokumentacja: [Cloud Monitoring documentation](https://docs.cloud.google.com/monitoring/docs)  
[50]
  - Dokumentacja: [Managed Service for Prometheus](https://cloud.google.com/stackdriver/docs/managed-prometheus)  
[54]
  - Dokumentacja: [Cloud Service Mesh overview – telemetry metrics](https://docs.cloud.google.com/service-mesh/docs/overview)  
[36]

- **Creating custom metrics from logs**[1]
  - Dokumentacja: [Cloud Logging docs – log-based metrics](https://docs.cloud.google.com/logging/docs)  
[53]

- **Using Metrics Explorer for ad hoc metric analysis**[1]
  - Dokumentacja: [Cloud Monitoring docs – Metrics Explorer](https://docs.cloud.google.com/monitoring/docs)  
[50]

- **Creating synthetic monitors**[1]
  - Dokumentacja: [Synthetic monitoring overview (uptime checks)](https://docs.cloud.google.com/monitoring/uptime-checks/introduction)  
[55]

***

### 4.3 Managing dashboards and alerts

- **Managing dashboards (e.g., creating, filtering, sharing, playbooks)**[1]
  - Dokumentacja: [Cloud Monitoring – dashboards](https://cloud.google.com/monitoring)  
[51]

- **Configuring alerting and alerting policies (e.g., SLIs, SLOs, cost control)**[1]
  - Dokumentacja: [SLO monitoring – alerting](https://cloud.google.com/monitoring/slo-monitoring)  
[47]

- **Widely used third-party alerting tools**[1]
  - Dokumentacja: [Cloud Monitoring docs – integrations & notification channels](https://docs.cloud.google.com/monitoring/docs)  
[50]

***

## Section 5: Optimizing performance and troubleshooting (~15% of the exam)

### 5.1 Troubleshooting issues

- **Infrastructure issues**[1]
  - Dokumentacja: [Cloud Monitoring – infrastructure metrics](https://docs.cloud.google.com/monitoring/docs)  
[50]

- **Application issues**[1]
  - Dokumentacja: [Logging and Monitoring in Google Cloud – course](https://www.skills.google/course_templates/99)  
[56]

- **CI/CD pipeline issues**[1]
  - Dokumentacja: [Cloud Build docs – troubleshooting builds](https://docs.cloud.google.com/build/docs)  
[19]
  - Dokumentacja: [Cloud Deploy – troubleshooting rollouts](https://cloud.google.com/deploy)  
[21]

- **Observability issues**[1]
  - Dokumentacja: [Cloud Logging & Monitoring – quick intro](https://www.dsstream.com/post/gcp-google-cloud-platform-logging-monitoring-alerting-quick-introduction)  
[57]

- **Performance and latency issues**[1]
  - Dokumentacja: [Cloud Trace documentation](https://docs.cloud.google.com/trace/docs)  
[58]
  - Dokumentacja: [Cloud Profiler](https://docs.cloud.google.com/profiler/docs)  
[59]

***

### 5.2 Implementing debugging tools in Google Cloud

- **Application instrumentation**[1]
  - Dokumentacja: [Cloud Trace API & instrumentation](https://docs.cloud.google.com/trace/docs)  
[60][58]

- **Cloud Trace**[1]
  - Dokumentacja: [Cloud Trace documentation](https://docs.cloud.google.com/trace/docs)  
[58]

- **Error Reporting**[1]
  - Dokumentacja: [Logging and Monitoring in Google Cloud – Error Reporting](https://www.skills.google/course_templates/99)  
[56]

***

### 5.3 Optimizing resource utilization and costs

- **Observability costs**[1]
  - Dokumentacja: [Cloud Logging overview – cost and exclusions](https://docs.cloud.google.com/logging/docs/overview)  
[5]
  - Dokumentacja: [Cloud Monitoring – pricing and metrics](https://cloud.google.com/monitoring)  
[51]

- **Spot virtual machines (VMs)**[1]
  - Dokumentacja: [Cloud Monitoring – compute metrics (do analizy wykorzystania Spot/Preemptible)](https://docs.cloud.google.com/monitoring/docs)  
[50]

- **Infrastructure cost planning (e.g., committed-use discounts, sustained-use discounts, network tiers)**[1]
  - Dokumentacja: [Cloud Monitoring – wykorzystanie jako baza do planowania CUD/SUD](https://cloud.google.com/monitoring)  
[51]

- **Google Cloud recommenders (e.g., cost, security, performance, manageability, reliability)**[1]
  - Dokumentacja: [Recommender documentation](https://docs.cloud.google.com/recommender/docs)  
[61][62]

***

Jeśli chcesz, mogę z tego od razu zrobić gotowy plik `pcde-exam-guide-links.md` (np. pod GitHuba) albo dorzucić do każdego punktu krótkie „co umieć / co przeczytać najpierw”.

Citations:
[1] [Professional Cloud Devops Engineer Exam Guide English - Scribd](https://www.scribd.com/document/927259577/Professional-Cloud-Devops-Engineer-Exam-Guide-English)  
[2] [Shared VPC | Virtual Private Cloud | Google Cloud](https://docs.cloud.google.com/vpc/docs/shared-vpc)  
[3] [Shared VPC | Virtual Private Cloud | Google Cloud Documentation](https://docs.cloud.google.com/vpc/docs/shared-vpc?authuser=31&hl=zh-tw)  
[4] [Metrics scopes overview | Cloud Monitoring | Google Cloud Documentation](https://docs.cloud.google.com/monitoring/settings?authuser=9)  
[5] [Cloud Logging overview | Google Cloud Documentation](https://docs.cloud.google.com/logging/docs/overview)  
[6] [Service accounts overview - Google Cloud](https://docs.cloud.google.com/iam/docs/service-account-overview)  
[7] [Best practices for using service accounts - IAM - Google Cloud](https://cloud.google.com/iam/docs/best-practices-service-accounts)  
[8] [Create service accounts | Identity and Access Management (IAM ...](https://docs.cloud.google.com/iam/docs/service-accounts-create)  
[9] [gcloud iam service-accounts create | Google Cloud SDK](https://cloud.google.com/sdk/gcloud/reference/iam/service-accounts/create)  
[10] [App Hub documentation | Google Cloud](https://docs.cloud.google.com/app-hub/docs)  
[11] [App Hub overview - Google Cloud Documentation](https://docs.cloud.google.com/app-hub/docs/overview)  
[12] [Terraform on Google Cloud documentation](https://docs.cloud.google.com/docs/terraform)  
[13] [Cloud Foundation Toolkit | Google Cloud](https://cloud.google.com/foundation-toolkit?hl=id)  
[14] [GoogleCloudPlatform/cloud-foundation-toolkit](https://github.com/GoogleCloudPlatform/cloud-foundation-toolkit)  
[15] [Example templates from the Cloud Foundation Toolkit](https://docs.cloud.google.com/deployment-manager/docs/reference/cloud-foundation-toolkit)  
[16] [Config Connector のドキュメント | Config Connector Documentation | Google Cloud](https://cloud.google.com/config-connector/docs?authuser=002&%3Bhl=ja&hl=ja)  
[17] [Config Connector 文档 | Config Connector Documentation | Google Cloud](https://cloud.google.com/config-connector/docs?hl=zh-cn)  
[18] [Infrastructure as code - Google Cloud Documentation](https://docs.cloud.google.com/docs/iac)  
[19] [Cloud Build documentation | Cloud Build Documentation | Google Cloud](https://cloud.google.com/build/docs/?authuser=4)  
[20] [Cloud Build documentation - Google Cloud](https://docs.cloud.google.com/build/docs)  
[21] [Cloud Deploy - Fully Managed Continuous Delivery | Google Cloud](https://cloud.google.com/deploy)  
[22] [Documentation Cloud Deploy | Google Cloud](https://cloud.google.com/deploy/docs?authuser=9&%3Bhl=fr&hl=fr)  
[23] [Use Skaffold with Cloud Deploy - Google Cloud Documentation](https://docs.cloud.google.com/deploy/docs/using-skaffold)  
[24] [Skaffold 2.0 Documentation](https://skaffold.dev/docs/)  
[25] [Artifact Registry overview - Google Cloudcloud.google.com › artifact-registry › docs › overview](https://docs.cloud.google.com/artifact-registry/docs/overview)  
[26] [Ringkasan Artifact Registry | Google Cloud](https://cloud.google.com/artifact-registry/docs/overview?authuser=09&hl=id)  
[27] [Getting started with Config Connector - Google Cloud Documentation](https://docs.cloud.google.com/config-connector/docs/how-to/getting-started)  
[28] [Documentation](https://cloud.google.com/kubernetes-engine/docs)  
[29] [Explore GKE documentation | Google Kubernetes Engine (GKE)](https://docs.cloud.google.com/kubernetes-engine/docs/about)  
[30] [Cloud Workstations documentation](https://docs.cloud.google.com/workstations/docs)  
[31] [Cloud Workstations API | Google Cloud Documentation](https://docs.cloud.google.com/workstations/docs/reference/rpc?authuser=9)  
[32] [Cloud Shell documentation](https://docs.cloud.google.com/shell/docs)  
[33] [How Cloud Shell works | Google Cloudcloud.google.com › shell › docs › how-cloud-shell-works](https://docs.cloud.google.com/shell/docs/how-cloud-shell-works)  
[34] [Cloud Code for VS Code documentation](https://docs.cloud.google.com/code/docs/vscode)  
[35] [Documentazione di Cloud Code for VS Code | Google Cloud](https://cloud.google.com/code/docs/vscode?authuser=5&%3Bhl=it&hl=it)  
[36] [Cloud Service Mesh overview | Google Cloud Documentation](https://docs.cloud.google.com/service-mesh/docs/overview)  
[37] [Cloud Build serverless CI/CD platform](https://cloud.google.com/build)  
[38] [Cloud Audit Logs overview - Google Cloudcloud.google.com › logging › docs › audit](https://docs.cloud.google.com/logging/docs/audit)  
[39] [Cloud Key Management Service documentation | Google Cloud Documentation](https://docs.cloud.google.com/kms/docs)  
[40] [Secret Manager documentation | Google Cloud](https://docs.cloud.google.com/secret-manager/docs)  
[41] [Create and access a secret using Secret Manager - Google Cloud](https://docs.cloud.google.com/secret-manager/docs/create-secret-quickstart)  
[42] [Certificate Manager overview | Google Cloud Documentation](https://docs.cloud.google.com/certificate-manager/docs/overview)  
[43] [Binary Authorization documentation | Google Cloud](https://cloud.google.com/binary-authorization/docs?hl=en)  
[44] [Binary Authorization concepts | Google Cloudcloud.google.com › binary-authorization › docs › key-concepts](https://docs.cloud.google.com/binary-authorization/docs/key-concepts)  
[45] [Set up for GKE](https://docs.cloud.google.com/binary-authorization/docs/setting-up)  
[46] [Service level objectives overview - Google Cloud Documentation](https://docs.cloud.google.com/service-mesh/legacy/in-cluster/observability/slo-overview)  
[47] [Service monitoring](https://cloud.google.com/monitoring/slo-monitoring)  
[48] [SRE Books For Site Reliability Engineering](https://sre.google/resources/book-update/)  
[49] [The Site Reliability Workbook](https://research.google/pubs/the-site-reliability-workbook/)  
[50] [Cloud Monitoring documentation](https://docs.cloud.google.com/monitoring/docs)  
[51] [Cloud Monitoring | Google Cloud](https://cloud.google.com/monitoring)  
[52] [VPC Flow Logs | Virtual Private Cloud](https://docs.cloud.google.com/vpc/docs/flow-logs?hl=ja)  
[53] [Cloud Logging documentation](https://docs.cloud.google.com/logging/docs)  
[54] [Google Cloud Managed Service for Prometheus | Google Cloud Observability](https://cloud.google.com/stackdriver/docs/managed-prometheus?authuser=002&%3Bhl=zh-tw&hl=zh-tw)  
[55] [Synthetic monitoring overview - Google Cloud](https://docs.cloud.google.com/monitoring/uptime-checks/introduction)  
[56] [Logging and Monitoring in Google Cloud](https://www.skills.google/course_templates/99)  
[57] [GCP (Google Cloud Platform) Logging, Monitoring & Alerting – quick ...](https://www.dsstream.com/post/gcp-google-cloud-platform-logging-monitoring-alerting-quick-introduction)  
[58] [Cloud Trace documentation](https://docs.cloud.google.com/trace/docs)  
[59] [Cloud Profiler documentation](https://docs.cloud.google.com/profiler/docs)  
[60] [Cloud Trace API | Google Cloud Documentation](https://docs.cloud.google.com/trace/docs/reference)  
[61] [Recommender documentation - Google Cloud Documentation](https://docs.cloud.google.com/recommender/docs)  
[62] [Recommender 文档 | Recommender Documentation | Google Cloud](https://cloud.google.com/recommender/docs?authuser=0000&%3Bhl=zh-cn&hl=zh-cn)  
[63] [spring-cloud-gcp/docs/src/main/asciidoc/secretmanager.adoc at main · GoogleCloudPlatform/spring-cloud-gcp](https://github.com/GoogleCloudPlatform/spring-cloud-gcp/blob/main/docs/src/main/asciidoc/secretmanager.adoc)  
[64] [Amazon Managed Service for Prometheus - IBM](https://www.ibm.com/docs/en/kubecost/self-hosted/1.x?topic=guide-amazon-managed-service-prometheus)  
[65] [ఢిల్లీ డేటా సెంటర్లో అగ్నిప్రమాదం.. గూగుల్ క్లౌడ్ సేవలకు అంతరాయం..](https://www.andhrajyothy.com/2026/technology/google-cloud-outage-in-india-after-delhi-data-centre-fire-disrupts-network-services-sgr-1531453.html)  
[66] [Provision a managed Cloud Service Mesh control plane on ...](https://docs.cloud.google.com/service-mesh/docs/onboarding/provision-control-plane)  
[67] [[PDF] Use Secure Cloud Key Management Practices](https://media.defense.gov/2024/Mar/07/2003407858/-1/-1/0/CSI-CloudTop10-Key-Management.PDF)  
[68] [Deep dive: Managed Service for Prometheus](https://www.youtube.com/watch?v=X4qAEa8_JxQ)  
[69] [Getting Started with Google Cloud Managed Service for Prometheus](https://www.youtube.com/watch?v=_mogL3kfKiU)  
[70] [Recommendation systems overview | Machine Learning](https://developers.google.com/machine-learning/recommendation/overview/types)  
[71] [Google Cloud Managed Service for Prometheus](https://www.youtube.com/watch?v=xScfavWAeJk)  
[72] [Virtual Private Cloud documentation](https://docs.cloud.google.com/vpc/docs)  
[73] [Configure a metrics scope by using the API | Cloud Monitoring](https://docs.cloud.google.com/monitoring/settings/manage-api)  
[74] [Subnetworks Use Permission](https://cloud.google.com/blog/products/gcp/getting-started-with-shared-vpc)  
[75] [Cloud Monitoring Metrics Scopes V1 API | Ruby client libraries](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-monitoring-metrics_scope-v1/latest/Google-Cloud-Monitoring-MetricsScope-V1-MetricsScopes)  
[76] [Create and delete service account keys - Google Cloud](https://docs.cloud.google.com/iam/docs/keys-create-delete)  
[77] [Understanding Shared VPCs in Google Cloud Platform](https://medium.com/@iobluedot/understanding-shared-vpcs-in-google-cloud-platform-7d9e8743d0d5)  
[78] [Cloud Monitoring API | Google Cloud Documentation](https://docs.cloud.google.com/monitoring/api/ref_v3/rpc?authuser=1)
