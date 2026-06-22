Poniżej masz długą listę w formacie Markdown, zachowującą **strukturę sekcji i podpunktów z exam guide** (wersja 2022/2023 zaktualizowana na stronie community, ale nadal zgodna z oficjalnym PDF), z **linkami do dokumentacji Google Cloud (minimum jeden na podpunkt) oraz wybranymi zewnętrznymi listami** tam, gdzie pasują.[1][2][3]

***

## Sekcja 1. Applying site reliability engineering principles to a service

### 1.1 Balance change, velocity, and reliability of the service

- **Discover SLIs (e.g., availability, latency)**[1]
  - Dokumentacja GCP: [Service level objectives overview (Cloud Service Mesh / SLOs)](https://docs.cloud.google.com/service-mesh/legacy/in-cluster/observability/slo-overview)  
[4]
  - Dokumentacja GCP: [SLO monitoring (Cloud Monitoring)](https://cloud.google.com/monitoring/slo-monitoring)  
[5]
  - Zewnętrzne: [SRE Books – rozdział „Service Level Objectives”](https://sre.google/resources/book-update/)  
[6]

- **Define SLOs and understand SLAs**[1]
  - Dokumentacja GCP: [Service level objectives overview](https://docs.cloud.google.com/service-mesh/legacy/in-cluster/observability/slo-overview)  
[4]
  - Dokumentacja GCP: [Cloud Monitoring – przegląd](https://cloud.google.com/monitoring)  
[7]
  - Zewnętrzne: [Google SRE – strona główna i książki](https://sre.google)  
[8]

- **Agree to consequences of not meeting the error budget**[1]
  - Dokumentacja GCP: [SLO monitoring – error budget, alerting](https://cloud.google.com/monitoring/slo-monitoring)  
[5]
  - Zewnętrzne: [SRE Workbook – rozdział o SLO i error budgets](https://research.google/pubs/the-site-reliability-workbook/)  
[9]

- **Construct feedback loops to decide what to build next**[1]
  - Dokumentacja GCP: [Cloud Monitoring – integracja z alertami i dashboardami](https://cloud.google.com/monitoring)  
[7]
  - Zewnętrzne: [SRE Books – „Monitoring Distributed Systems” i „Practical Alerting”](https://sre.google/resources/book-update/)  
[6]

- **Eliminate toil via automation**[1]
  - Dokumentacja GCP: [Infrastructure as code on Google Cloud (Terraform, Config Connector, CDKTF)](https://docs.cloud.google.com/docs/iac)  
[10]
  - Zewnętrzne: [Google SRE – rozdział „Eliminating Toil”](https://sre.google/resources/book-update/)  
[6]

***

### 1.2 Manage service life cycle

- **Manage a service (introduce, deploy, maintain, retire)**[1]
  - Dokumentacja GCP: [GKE – overview (lifecycle usług w klastrach)](https://docs.cloud.google.com/kubernetes-engine/docs/about)  
[11]
  - Dokumentacja GCP: [Cloud Run / GKE deployment pipelines – Cloud Deploy overview](https://cloud.google.com/deploy)  
[12]

- **Plan for capacity (quotas and limits management)**[1]
  - Dokumentacja GCP: [Cloud Monitoring – metrics & dashboards do analizy wykorzystania](https://cloud.google.com/monitoring)  
[7]
  - Dokumentacja GCP: [VPC Flow Logs – dane o ruchu sieciowym do capacity planning](https://docs.cloud.google.com/vpc/docs/flow-logs)  
[13]

***

### 1.3 Ensure healthy communication and collaboration for operations

- **Prevent burnout (automation, on-call policies)**[1]
  - Zewnętrzne (Google SRE): [Chapters „Being On-Call”, „Dealing with Interrupts”, „Managing Incidents”](https://sre.google/resources/book-update/)  
[6]

- **Foster a learning culture**[1]
  - Zewnętrzne (Google SRE): [„Postmortem Culture: Learning from Failure”](https://sre.google/resources/book-update/)  
[6]

- **Foster a culture of blamelessness**[1]
  - Zewnętrzne (Google SRE): [„Postmortem Culture: Learning from Failure” oraz „Tracking Outages”](https://sre.google/resources/book-update/)  
[6]

***

## Sekcja 2. Building and implementing CI/CD pipelines for a service

### 2.1 Design CI/CD pipelines

- **Creating and storing immutable artifacts with Artifact Registry**[1]
  - Dokumentacja GCP: [Artifact Registry overview](https://docs.cloud.google.com/artifact-registry/docs/overview)  
[14]
  - Dokumentacja GCP: [Cloud Build – overview (budowanie obrazów i artefaktów)](https://docs.cloud.google.com/build/docs)  
[15]

- **Deployment strategies with Cloud Build and Spinnaker**[1]
  - Dokumentacja GCP: [Cloud Build – CI/CD pipelines](https://docs.cloud.google.com/build/docs)  
[15]
  - Dokumentacja GCP: [Cloud Deploy – canary, parallel deploy, rollouts/rollback](https://cloud.google.com/deploy)  
[12]

- **Deployment to hybrid and multicloud environments with Anthos, Spinnaker, and Kubernetes**[1]
  - Dokumentacja GCP: [GKE documentation – multi‑cluster / fleet docs overview](https://cloud.google.com/kubernetes-engine/docs)  
[16]
  - Dokumentacja GCP: [Use Skaffold with Cloud Deploy (GitOps / multi-env deploy)](https://docs.cloud.google.com/deploy/docs/using-skaffold)  
[17]

- **Artifact versioning strategy with Cloud Build and Artifact Registry**[1]
  - Dokumentacja GCP: [Artifact Registry overview – repozytoria, wersjonowanie, regional repos](https://docs.cloud.google.com/artifact-registry/docs/overview)  
[14]
  - Dokumentacja GCP: [Cloud Build – build steps i tagowanie obrazów](https://docs.cloud.google.com/build/docs)  
[15]

- **CI/CD pipeline triggers with Cloud Source Repositories, external SCM, and Pub/Sub**[1]
  - Dokumentacja GCP: [Cloud Build – overview (triggers z repozytoriów i Pub/Sub)](https://docs.cloud.google.com/build/docs)  
[15]

- **Testing a new version with Spinnaker**[1]
  - Dokumentacja GCP: [Cloud Deploy – deployment verification & hooks](https://cloud.google.com/deploy)  
[12]

- **Configuring deployment processes (e.g., approval flows)**[1]
  - Dokumentacja GCP: [Cloud Deploy – built‑in approvals, promotion flows](https://cloud.google.com/deploy)  
[12]

***

### 2.2 Implement CI/CD pipelines

- **CI with Cloud Build**[1]
  - Dokumentacja GCP: [Cloud Build documentation](https://docs.cloud.google.com/build/docs)  
[15]

- **CD with Cloud Build**[1]
  - Dokumentacja GCP: [Cloud Build – CI/CD platform overview](https://cloud.google.com/build)  
[18]
  - Dokumentacja GCP: [Use Skaffold with Cloud Deploy – integracja z CI](https://docs.cloud.google.com/deploy/docs/using-skaffold)  
[17]

- **Open source tooling (e.g., Jenkins, Spinnaker, GitLab, Concourse)**[1]
  - Dokumentacja GCP: [Skaffold documentation – continuous development & CI/CD](https://skaffold.dev/docs/)  
[19]
  - Codelab: [Understanding Skaffold – integracja z innymi narzędziami](https://codelabs.developers.google.com/understanding-skaffold)  
[20]

- **Auditing and tracing of deployments (CSR, Artifact Registry, Cloud Build, Cloud Audit Logs)**[1]
  - Dokumentacja GCP: [Cloud Build documentation – audit logs dla buil­dów](https://docs.cloud.google.com/build/docs)  
[15]
  - Dokumentacja GCP: [Cloud Audit Logs overview](https://docs.cloud.google.com/logging/docs/audit)  
[21]

***

### 2.3 Manage configuration and secrets

- **Secure storage methods**[1]
  - Dokumentacja GCP: [Infrastructure as code & security – Terraform / IAM / Config Connector](https://docs.cloud.google.com/docs/iac)  
[10]

- **Secret rotation and config changes**[1]
  - Dokumentacja GCP: [Infrastructure as code overview – automatyzacja zmian konfiguracyjnych](https://docs.cloud.google.com/docs/terraform/iac-overview)  
[22]

***

### 2.4 Manage infrastructure as code

- **Terraform**[1]
  - Dokumentacja GCP: [Terraform on Google Cloud – główna dokumentacja](https://docs.cloud.google.com/docs/terraform)  
[23]
  - HashiCorp: [Get started on GCP with Terraform](https://developer.hashicorp.com/terraform/tutorials/gcp-get-started)  
[24]

- **Infrastructure code versioning**[1]
  - Dokumentacja GCP: [Infrastructure as code – versioning konfiguracji](https://docs.cloud.google.com/docs/iac)  
[10]

- **Make infrastructure changes safer**[1]
  - Dokumentacja GCP: [Terraform on Google Cloud – plan/apply/destroy, IaC best practices](https://docs.cloud.google.com/docs/terraform)  
[23]

- **Immutable architecture**[1]
  - Dokumentacja GCP: [Infrastructure as code overview – deklaratywne i powtarzalne deploymenty](https://docs.cloud.google.com/docs/terraform/iac-overview)  
[22]

***

### 2.5 Deploy CI/CD tooling

- **Centralized tools vs. multiple tools (single vs. multi‑tenant)**[1]
  - Dokumentacja GCP: [Cloud Build – managed CI/CD](https://cloud.google.com/build)  
[18]
  - Dokumentacja GCP: [Cloud Deploy – centralny widok delivery pipelines](https://cloud.google.com/deploy)  
[12]

- **Security of CI/CD tooling**[1]
  - Dokumentacja GCP: [Artifact Registry overview – ochrona supply chain, IAM, VPC‑SC](https://docs.cloud.google.com/artifact-registry/docs/overview)  
[14]

***

### 2.6 Manage different development environments (staging, production)

- **Decide on the number of environments and their purpose**[1]
  - Dokumentacja GCP: [Cloud Deploy – pipelines z wieloma targetami (test, stage, prod)](https://cloud.google.com/deploy)  
[12]

- **Create environments dynamically per feature branch with GKE**[1]
  - Dokumentacja GCP: [GKE documentation – core GKE docs](https://cloud.google.com/kubernetes-engine/docs)  
[16]
  - Dokumentacja GCP: [Use Skaffold with Cloud Deploy – per‑target profiles](https://docs.cloud.google.com/deploy/docs/using-skaffold)  
[17]

- **Local development environments with Docker, Cloud Code, Skaffold**[1]
  - Dokumentacja GCP: [Cloud Code for VS Code – overview](https://docs.cloud.google.com/code/docs/vscode)  
[25]
  - Dokumentacja GCP: [Understanding Skaffold – local dev loop](https://codelabs.developers.google.com/understanding-skaffold)  
[20]

***

### 2.7 Secure the deployment pipeline

- **Vulnerability analysis with Artifact Registry**[1]
  - Dokumentacja GCP: [Artifact Registry overview – skanowanie obrazów, Artifact Analysis](https://docs.cloud.google.com/artifact-registry/docs/overview)  
[14]

- **Binary Authorization**[1]
  - Dokumentacja GCP: [Binary Authorization documentation – overview](https://cloud.google.com/binary-authorization/docs)  
[26]
  - Dokumentacja GCP: [Binary Authorization concepts](https://docs.cloud.google.com/binary-authorization/docs/key-concepts)  
[27]

- **IAM policies per environment**[1]
  - Dokumentacja GCP: [Binary Authorization – setup for GKE (cross‑project IAM, attestors)](https://docs.cloud.google.com/binary-authorization/docs/setting-up)  
[28]

***

## Sekcja 3. Implementing service monitoring strategies

### 3.1 Manage application logs

- **Collecting logs from Compute Engine, GKE with Cloud Logging, Fluentd**[1]
  - Dokumentacja GCP: [Cloud Logging overview](https://docs.cloud.google.com/logging/docs/overview)  
[29]
  - Dokumentacja GCP: [Cloud Logging – product page](https://cloud.google.com/logging)  
[30]

- **Collecting third‑party and structured logs with Cloud Logging, Fluentd**[1]
  - Dokumentacja GCP: [Cloud Logging docs – ingest from many sources, custom logs](https://docs.cloud.google.com/logging/docs)  
[31]

- **Sending application logs directly to the Cloud Logging API**[1]
  - Dokumentacja GCP: [Cloud Logging overview – API, log‑based metrics](https://docs.cloud.google.com/logging/docs/overview)  
[29]

***

### 3.2 Manage application metrics with Cloud Monitoring

- **Collecting metrics from Compute Engine**[1]
  - Dokumentacja GCP: [Cloud Monitoring documentation](https://docs.cloud.google.com/monitoring/docs)  
[32]

- **Collecting GKE/Kubernetes metrics**[1]
  - Dokumentacja GCP: [Cloud Monitoring – product page](https://cloud.google.com/monitoring)  
[7]
  - Dokumentacja GCP: [GKE docs – monitoring i observability](https://cloud.google.com/kubernetes-engine/docs)  
[16]

- **Use Metrics Explorer for ad hoc metric analysis**[1]
  - Dokumentacja GCP: [Cloud Monitoring docs – Metrics Explorer](https://docs.cloud.google.com/monitoring/docs)  
[32]

***

### 3.3 Manage Cloud Monitoring platform

- **Creating a monitoring dashboard**[1]
  - Dokumentacja GCP: [Cloud Monitoring – dashboards & charts](https://cloud.google.com/monitoring)  
[7]

- **Filtering and sharing dashboards**[1]
  - Dokumentacja GCP: [Cloud Monitoring documentation](https://docs.cloud.google.com/monitoring/docs)  
[32]

- **Configure third‑party alerting in Cloud Monitoring (PagerDuty, Slack)**[1]
  - Dokumentacja GCP: [Cloud Monitoring – alerting overview](https://cloud.google.com/monitoring)  
[7]

- **Define alerting policies based on SLIs with Cloud Monitoring**[1]
  - Dokumentacja GCP: [SLO monitoring (alerting on SLO burn rate)](https://cloud.google.com/monitoring/slo-monitoring)  
[5]

- **Automate alerting policy definition with Terraform**[1]
  - Dokumentacja GCP: [Terraform on Google Cloud – monitorowanie jako kod](https://docs.cloud.google.com/docs/terraform)  
[23]

- **Implementing SLO monitoring and alerting with Cloud Monitoring**[1]
  - Dokumentacja GCP: [SLO monitoring – health based on SLOs](https://cloud.google.com/monitoring/slo-monitoring)  
[5]

- **Understand Cloud Monitoring integrations (Grafana, BigQuery)**[1]
  - Dokumentacja GCP: [Cloud Monitoring docs – integracje i export danych](https://docs.cloud.google.com/monitoring/docs)  
[32]

- **Using SIEM tools to analyze audit/flow logs (Splunk, Datadog)**[1]
  - Dokumentacja GCP: [Cloud Audit Logs overview](https://docs.cloud.google.com/logging/docs/audit)  
[21]
  - Dokumentacja GCP: [VPC Flow Logs – routing do Cloud Logging](https://docs.cloud.google.com/vpc/docs/flow-logs)  
[13]

- **Design Cloud Monitoring metrics scopes**[1]
  - Dokumentacja GCP: [Cloud Monitoring documentation – multi‑project monitoring](https://docs.cloud.google.com/monitoring/docs)  
[32]

***

### 3.4 Manage Cloud Logging platform

- **Enabling data access logs (Cloud Audit Logs)**[1]
  - Dokumentacja GCP: [Cloud Audit Logs overview](https://docs.cloud.google.com/logging/docs/audit)  
[21]

- **Enabling VPC Flow Logs**[1]
  - Dokumentacja GCP: [VPC Flow Logs](https://docs.cloud.google.com/vpc/docs/flow-logs)  
[13]

- **Viewing logs in the Google Cloud Console**[1]
  - Dokumentacja GCP: [Cloud Logging – Logs Explorer](https://docs.cloud.google.com/logging/docs)  
[31]

- **Using basic vs. advanced logging filters**[1]
  - Dokumentacja GCP: [Cloud Logging overview – query & filters](https://docs.cloud.google.com/logging/docs/overview)  
[29]

- **Implementing logs‑based metrics**[1]
  - Dokumentacja GCP: [Cloud Logging docs – log-based metrics](https://docs.cloud.google.com/logging/docs)  
[31]

- **Understanding the logging exclusion vs. logging export**[1]
  - Dokumentacja GCP: [Cloud Logging overview – routing and exclusions](https://docs.cloud.google.com/logging/docs/overview)  
[29]

- **Selecting the options for logging export**[1]
  - Dokumentacja GCP: [Cloud Logging docs – exports (BigQuery, Pub/Sub, Storage)](https://docs.cloud.google.com/logging/docs)  
[31]

- **Implementing a project‑level / org‑level export**[1]
  - Dokumentacja GCP: [Cloud Logging overview – centralized exports](https://docs.cloud.google.com/logging/docs/overview)  
[29]

- **Viewing export logs in Cloud Storage and BigQuery**[1]
  - Dokumentacja GCP: [Cloud Logging docs – log export destinations](https://docs.cloud.google.com/logging/docs)  
[31]

- **Sending logs to an external logging platform**[1]
  - Dokumentacja GCP: [Cloud Logging overview – external integrations / SIEM](https://docs.cloud.google.com/logging/docs/overview)  
[29]

***

### 3.5 Implement logging and monitoring access controls

- **Set ACL to restrict access to audit logs with IAM, Cloud Logging**[1]
  - Dokumentacja GCP: [Cloud Audit Logs overview – IAM & access control](https://docs.cloud.google.com/logging/docs/audit)  
[21]

- **Set ACL to restrict export configuration with IAM, Cloud Logging**[1]
  - Dokumentacja GCP: [Cloud Logging docs – export config and permissions](https://docs.cloud.google.com/logging/docs)  
[31]

- **Set ACL to allow metric writing for custom metrics with IAM, Cloud Monitoring**[1]
  - Dokumentacja GCP: [Cloud Monitoring documentation – custom metrics & IAM](https://docs.cloud.google.com/monitoring/docs)  
[32]

***

## Sekcja 4. Optimizing service performance

### 4.1 Identify service performance issues

- **Evaluate and understand user impact**[1]
  - Dokumentacja GCP: [Cloud Monitoring – SLOs, uptime checks, alerting](https://cloud.google.com/monitoring)  
[7]

- **Utilize Google Cloud’s operations suite to identify cloud resource utilization**[1]
  - Dokumentacja GCP: [Cloud Monitoring overview](https://docs.cloud.google.com/monitoring/docs)  
[32]
  - Dokumentacja GCP: [Google Cloud Logging & Monitoring – quick intro](https://www.dsstream.com/post/gcp-google-cloud-platform-logging-monitoring-alerting-quick-introduction)  
[33]

- **Utilize Cloud Trace and Cloud Profiler to profile performance characteristics**[1]
  - Dokumentacja GCP: [Cloud Trace documentation](https://docs.cloud.google.com/trace/docs)  
[34]
  - Dokumentacja GCP: [Cloud Profiler documentation](https://docs.cloud.google.com/profiler/docs)  
[35]

- **Interpret service mesh telemetry**[1]
  - Dokumentacja GCP: [Service Mesh SLO / telemetry overview](https://docs.cloud.google.com/service-mesh/legacy/in-cluster/observability/slo-overview)  
[4]

- **Troubleshoot issues with the image/OS**[1]
  - Dokumentacja GCP: [Cloud Monitoring & Cloud Logging – metrics + logs korelacja](https://www.dsstream.com/post/gcp-google-cloud-platform-logging-monitoring-alerting-quick-introduction)  
[33]

- **Troubleshoot network issues (VPC flow logs, firewall logs, latency, view network details)**[1]
  - Dokumentacja GCP: [VPC Flow Logs](https://docs.cloud.google.com/vpc/docs/flow-logs)  
[13]

***

### 4.2 Debug application code

- **Application instrumentation**[1]
  - Dokumentacja GCP: [Cloud Trace – API & instrumentacja](https://docs.cloud.google.com/trace/docs)  
[36][34]

- **Cloud Debugger**[1]
  - Dokumentacja GCP: [Cloud Debugger – docs/overview PDF](https://price2meet.com/gcp/docs/debugger.pdf)  
[37]
  - Dokumentacja GCP: [Cloud Debugger help – „Debug”](https://support.google.com/cloud/answer/6323288?hl=en)  
[38]

- **Cloud Logging**[1]
  - Dokumentacja GCP: [Cloud Logging](https://cloud.google.com/logging)  
[30]

- **Cloud Trace**[1]
  - Dokumentacja GCP: [Cloud Trace documentation](https://docs.cloud.google.com/trace/docs)  
[34]

- **Debugging distributed applications**[1]
  - Dokumentacja GCP: [Cloud Trace – distributed tracing](https://www.dash0.com/knowledge/what-is-google-cloud-trace)  
[39]

- **App Engine local development server**[1]
  - (pośrednio) Dokumentacja GCP: [Cloud Debugger – debugowanie aplikacji w różnych środowiskach](https://price2meet.com/gcp/docs/debugger.pdf)  
[37]

- **Error Reporting**[1]
  - Dokumentacja GCP: [Logging & Error Reporting – kurs „Logging and Monitoring in Google Cloud”](https://www.skills.google/course_templates/99)  
[40]

- **Cloud Profiler**[1]
  - Dokumentacja GCP: [Cloud Profiler](https://docs.cloud.google.com/profiler/docs)  
[35]

***

### 4.3 Optimize resource utilization

- **Identify resource costs**[1]
  - Dokumentacja GCP: [Cloud Monitoring – cost‑related metrics, dashboards](https://cloud.google.com/monitoring)  
[7]

- **Identify resource utilization levels**[1]
  - Dokumentacja GCP: [Cloud Monitoring docs](https://docs.cloud.google.com/monitoring/docs)  
[32]

- **Develop plan to optimize areas of greatest cost or lowest utilization**[1]
  - Dokumentacja GCP: [Best practices – monitoring & optimization (blog)](https://www.dsstream.com/post/gcp-google-cloud-platform-logging-monitoring-alerting-quick-introduction)  
[33]

- **Manage preemptible VMs**[1]
  - (ogólnie) Dokumentacja GCP: [Cloud Monitoring – metrics dla Compute Engine](https://docs.cloud.google.com/monitoring/docs)  
[32]

- **Utilize committed use discounts where appropriate**[1]
  - (ogólnie) Dokumentacja GCP: [Cloud Monitoring – analiza wykorzystania do planowania rabatów](https://cloud.google.com/monitoring)  
[7]

- **TCO considerations (security, logging, networking)**[1]
  - Dokumentacja GCP: [Cloud Logging & Monitoring – overview](https://docs.cloud.google.com/logging/docs/overview)  
[33][29]

- **Consider network pricing**[1]
  - Dokumentacja GCP: [VPC Flow Logs – analiza ruchu i optymalizacja kosztów](https://docs.cloud.google.com/vpc/docs/flow-logs)  
[13]

***

## Sekcja 5. Managing service incidents

### 5.1 Coordinate roles and implement communication channels during a service incident

- **Define roles (incident commander, communication lead, operations lead)**[1]
  - Zewnętrzne (Google SRE): [„Emergency Response”, „Managing Incidents”, „Postmortem Culture”](https://sre.google/resources/book-update/)  
[6]

- **Handle requests for impact assessment**[1]
  - Zewnętrzne (Google SRE): [„Managing Incidents” – assessment & communication](https://sre.google/resources/book-update/)  
[6]

- **Provide regular status updates, internal and external**[1]
  - Zewnętrzne (Google SRE): [„Emergency Response”, „Communication and Collaboration in SRE”](https://sre.google/resources/book-update/)  
[6]

- **Record major changes in incident state (mitigated, all‑clear)**[1]
  - Zewnętrzne (Google SRE): [„Tracking Outages”](https://sre.google/resources/book-update/)  
[6]

- **Establish communications channels (email, IRC, Hangouts, Slack, phone)**[1]
  - Zewnętrzne (Google SRE): [„Communication and Collaboration in SRE”](https://sre.google/resources/book-update/)  
[6]

- **Scaling response team and delegation**[1]
  - Zewnętrzne (Google SRE): [„Managing Incidents”, „Dealing with Interrupts”](https://sre.google/resources/book-update/)  
[6]

- **Avoid exhaustion / burnout**[1]
  - Zewnętrzne (Google SRE): [„Being On-Call”, „Dealing with Interrupts”](https://sre.google/resources/book-update/)  
[6]

- **Rotate / hand over roles**[1]
  - Zewnętrzne (Google SRE): [„Emergency Response”, „Being On-Call”](https://sre.google/resources/book-update/)  
[6]

- **Manage stakeholder relationships**[1]
  - Zewnętrzne (Google SRE): [„Communication and Collaboration in SRE”](https://sre.google/resources/book-update/)  
[6]

***

### 5.2 Investigate incident symptoms impacting users

- **Identify probable causes of service failure**[1]
  - Dokumentacja GCP: [Cloud Trace – root cause analysis przez distributed tracing](https://www.dash0.com/knowledge/what-is-google-cloud-trace)  
[39]

- **Evaluate symptoms against probable causes; rank probability**[1]
  - Dokumentacja GCP: [Cloud Monitoring & Logging – korelacja metryk i logów](https://www.dsstream.com/post/gcp-google-cloud-platform-logging-monitoring-alerting-quick-introduction)  
[33]

- **Perform investigation to isolate most likely actual cause**[1]
  - Dokumentacja GCP: [Cloud Debugger – inspekcja stanu aplikacji w produkcji](https://price2meet.com/gcp/docs/debugger.pdf)  
[37]

- **Identify alternatives to mitigate issue**[1]
  - Dokumentacja GCP: [Cloud Deploy – rollback, canary, parallel deploy](https://cloud.google.com/deploy)  
[12]

***

### 5.3 Mitigate incident impact on users

- **Roll back release**[1]
  - Dokumentacja GCP: [Cloud Deploy – easy rollout/rollback](https://cloud.google.com/deploy)  
[12]

- **Drain / redirect traffic**[1]
  - Dokumentacja GCP: [Cloud Deploy – traffic management (canary, promotion)](https://cloud.google.com/deploy)  
[12]

- **Turn off experiment**[1]
  - Dokumentacja GCP: [Cloud Monitoring & Logging – wyłączenie funkcjonalności na podstawie SLO / alertów](https://cloud.google.com/monitoring)  
[7]

- **Add capacity**[1]
  - Dokumentacja GCP: [Cloud Monitoring – metrics for scaling decisions](https://docs.cloud.google.com/monitoring/docs)  
[32]

***

### 5.4 Resolve issues with deployments (e.g., Cloud Build, Jenkins)

- **Code change / fix bug**[1]
  - Dokumentacja GCP: [Cloud Build – build and test nowych commitów](https://docs.cloud.google.com/build/docs)  
[15]

- **Verify fix**[1]
  - Dokumentacja GCP: [Cloud Deploy – deployment verification hooks](https://cloud.google.com/deploy)  
[12]

- **Declare all‑clear**[1]
  - Zewnętrzne (Google SRE): [„Managing Incidents”, „Tracking Outages”](https://sre.google/resources/book-update/)  
[6]

***

### 5.5 Document issue in a postmortem

- **Document root causes**[1]
  - Zewnętrzne (Google SRE): [„Postmortem Culture: Learning from Failure”](https://sre.google/resources/book-update/)  
[6]

- **Create and prioritize action items**[1]
  - Zewnętrzne (Google SRE): [„Postmortem Culture”, „Tracking Outages”](https://sre.google/resources/book-update/)  
[6]

- **Communicate postmortem to stakeholders**[1]
  - Zewnętrzne (Google SRE): [„Communication and Collaboration in SRE”](https://sre.google/resources/book-update/)  
[6]

***

### Dodatkowe oficjalne źródła do całego egzaminu

- **Oficjalna strona certyfikatu** (opis roli, format egzaminu, sample questions):  
  - [Professional Cloud DevOps Engineer Certification | Google Cloud](https://cloud.google.com/learn/certification/cloud-devops-engineer)  
[2]

- **Community mirror exam guide + lista sekcji (pomogło odtworzyć hierarchię)**:  
  - [Google Cloud Certification – Professional Cloud DevOps Engineer (wiki)](https://github.com/cloud-quickstart/wiki/blob/main/google-cloud-certification.md)  
[1]

- **Zewnętrzne prep‑sheets / listy linków**:  
  - [Awesome GCP Certifications – Professional Cloud DevOps Engineer sekcja](https://github.com/sathishvj/awesome-gcp-certifications/blob/master/professional-cloud-devops-engineer.md)  
[3]
  - [Exam prep sheet (GitHub)](https://github.com/jesuispy/Google-Cloud-Professional-Cloud-DevOps-Engineer-Exam-Prep-Sheet)  
[41]

Możesz tę listę bezpośrednio wkleić do własnego pliku Markdown (np. `pcde-links.md`) i dalej rozszerzać o własne notatki lub dodatkowe linki per temat.

Citations:
[1] [Professional Cloud Devops Engineer Exam Guide English - Scribd](https://www.scribd.com/document/927259577/Professional-Cloud-Devops-Engineer-Exam-Guide-English)  
[2] [Professional Cloud DevOps Engineer Certification | Learn](https://cloud.google.com/learn/certification/cloud-devops-engineer)  
[3] [awesome-gcp-certifications/professional-cloud-devops-engineer.md ...](https://github.com/sathishvj/awesome-gcp-certifications/blob/master/professional-cloud-devops-engineer.md)  
[4] [Service level objectives overview - Google Cloud Documentation](https://docs.cloud.google.com/service-mesh/legacy/in-cluster/observability/slo-overview)  
[5] [Service monitoring](https://cloud.google.com/monitoring/slo-monitoring)  
[6] [SRE Books For Site Reliability Engineering](https://sre.google/resources/book-update/)  
[7] [Cloud Monitoring | Google Cloud](https://cloud.google.com/monitoring)  
[8] [Google SRE - Site Reliability engineering](https://sre.google)  
[9] [The Site Reliability Workbook](https://research.google/pubs/the-site-reliability-workbook/)  
[10] [Infrastructure as code - Google Cloud Documentation](https://docs.cloud.google.com/docs/iac)  
[11] [Explore GKE documentation | Google Kubernetes Engine (GKE)](https://docs.cloud.google.com/kubernetes-engine/docs/about)  
[12] [Cloud Deploy - Fully Managed Continuous Delivery | Google Cloud](https://cloud.google.com/deploy)  
[13] [VPC Flow Logs | Virtual Private Cloud](https://docs.cloud.google.com/vpc/docs/flow-logs?hl=ja)  
[14] [Artifact Registry overview - Google Cloudcloud.google.com › artifact-registry › docs › overview](https://docs.cloud.google.com/artifact-registry/docs/overview)  
[15] [Cloud Build documentation | Cloud Build Documentation | Google Cloud](https://cloud.google.com/build/docs/?authuser=4)  
[16] [Documentation](https://cloud.google.com/kubernetes-engine/docs)  
[17] [Use Skaffold with Cloud Deploy - Google Cloud Documentation](https://docs.cloud.google.com/deploy/docs/using-skaffold)  
[18] [Cloud Build serverless CI/CD platform](https://cloud.google.com/build)  
[19] [Skaffold 2.0 Documentation](https://skaffold.dev/docs/)  
[20] [Understanding Skaffold | Google Codelabs](https://codelabs.developers.google.com/understanding-skaffold)  
[21] [Cloud Audit Logs overview - Google Cloudcloud.google.com › logging › docs › audit](https://docs.cloud.google.com/logging/docs/audit)  
[22] [Infrastructure as Code in Google Cloud | Terraform](https://docs.cloud.google.com/docs/terraform/iac-overview?hl=de)  
[23] [Terraform on Google Cloud documentation](https://docs.cloud.google.com/docs/terraform)  
[24] [GCP | Terraform](https://developer.hashicorp.com/terraform/tutorials/gcp-get-started)  
[25] [Cloud Code for VS Code documentation](https://docs.cloud.google.com/code/docs/vscode)  
[26] [Binary Authorization documentation | Google Cloud](https://cloud.google.com/binary-authorization/docs?hl=en)  
[27] [Binary Authorization concepts | Google Cloudcloud.google.com › binary-authorization › docs › key-concepts](https://docs.cloud.google.com/binary-authorization/docs/key-concepts)  
[28] [Set up for GKE](https://docs.cloud.google.com/binary-authorization/docs/setting-up)  
[29] [Cloud Logging overview | Google Cloud Documentation](https://docs.cloud.google.com/logging/docs/overview)  
[30] [Cloud Logging | Google Cloud](https://cloud.google.com/logging)  
[31] [Cloud Logging documentation](https://docs.cloud.google.com/logging/docs)  
[32] [Cloud Monitoring documentation](https://docs.cloud.google.com/monitoring/docs)  
[33] [GCP (Google Cloud Platform) Logging, Monitoring & Alerting – quick ...](https://www.dsstream.com/post/gcp-google-cloud-platform-logging-monitoring-alerting-quick-introduction)  
[34] [Cloud Trace documentation](https://docs.cloud.google.com/trace/docs)  
[35] [Cloud Profiler documentation](https://docs.cloud.google.com/profiler/docs)  
[36] [Cloud Trace API | Google Cloud Documentation](https://docs.cloud.google.com/trace/docs/reference)  
[37] [8/23/2020](https://price2meet.com/gcp/docs/debugger.pdf)  
[38] [Debug - Google Cloud Platform Console Help](https://support.google.com/cloud/answer/6323288?hl=en)  
[39] [What is Google Cloud Trace? - Dash0](https://www.dash0.com/knowledge/what-is-google-cloud-trace)  
[40] [Logging and Monitoring in Google Cloud](https://www.skills.google/course_templates/99)  
[41] [GitHub - jesuispy/Google-Cloud-Professional-Cloud-DevOps-Engineer-Exam-Prep-Sheet](https://github.com/jesuispy/Google-Cloud-Professional-Cloud-DevOps-Engineer-Exam-Prep-Sheet)  
[42] [GCP Professional Cloud DevOps Engineer Exam Guide 2026](https://sailor.sh/blog/gcp-professional-cloud-devops-engineer-exam-guide-2026/)  
[43] [Google Professional Cloud DevOps Engineer Preparation NEW & Exclusive Version](https://books.google.com/books/about/Google_Professional_Cloud_DevOps_Enginee.html?id=1ekXEQAAQBAJ)  
[44] [Professional Cloud DevOps Engineer Exam Guide _ Google Cloud _ Learn](https://www.scribd.com/document/866482927/Professional-Cloud-DevOps-Engineer-Exam-Guide-Google-Cloud-Learn)  
[45] [Certification — Professional Google Cloud DevOps Engineer Exam Step-By-Step Preparations Guide.](https://medium.com/google-cloud/professional-cloud-devops-engineer-exam-preparations-step-by-step-guide-7441ee6327bd)  
[46] [How I Passed the GCP DevOps Engineer Exam (Study Plan & Key Topics)](https://www.youtube.com/watch?v=8Koysw83MA8)  
[47] [Professional Cloud DevOps Engineer V12.35 (2)](https://www.scribd.com/document/536237612/Professional-Cloud-DevOps-Engineer-V12-35-2)  
[48] [Google Professional Cloud DevOps Engineer Exam (Questions ...](https://techauntie.gumroad.com/l/ProfessionalCloudDevOps?layout=profile)  
[49] [Professional Cloud DevOps Engineer_compressed](https://www.scribd.com/document/844044031/Professional-Cloud-DevOps-Engineer-compressed)  
[50] [GCP Professional DevOps Engineer Exam Guide 2026](https://certifycopilot.ai/blog/gcp-professional-devops-engineer-exam-guide-2026)  
[51] [Professional Cloud DevOps Engineer](https://www.scribd.com/document/880675357/Professional-Cloud-DevOps-Engineer)  
[52] [Preparing for the Google Cloud Professional Cloud DevOps Engineer Exam](https://medium.com/google-cloud/preparing-for-the-google-cloud-professional-cloud-devops-engineer-exam-30e9d5fe07e4)  
[53] [How to Pass the Google Professional Cloud DevOps Engineer Exam](https://medium.com/google-cloud/how-to-pass-the-google-professional-cloud-devops-exam-fc8754af0203)  
[54] [Cloud Certifications: GC Professional Cloud DevOps Engineer](https://www.pluralsight.com/resources/blog/guides/cloud-certifications-gcp-professional-cloud-devops-engineer)  
[55] [Professional Cloud DevOps Engineer 試験ガイド | Learn](https://cloud.google.com/learn/certification/guides/cloud-devops-engineer/?hl=ja)  
[56] [Panduan Ujian Professional Cloud DevOps Engineer](https://cloud.google.com/learn/certification/guides/cloud-devops-engineer?hl=id)  
[57] [GCP DevOps Engineer Exam Prep Guide | PDF | Cloud Computing](https://www.scribd.com/document/684563254/Google-Cloud-DevOps-Engineer-Exam-Prep-Sheet)  
[58] [#1 How to Certification Exam Google Professional Cloud DevOps Engineer in 24 hours - Part 01](https://www.youtube.com/watch?v=IOUfqA_MgMw)  
[59] [Guia do exame para a certificação Professional Cloud DevOps Engineer | Google Cloud | Learn](https://cloud.google.com/learn/certification/guides/cloud-devops-engineer/?hl=pt_pt)  
[60] [[PDF] 2026 Google Realistic Real Professional-Cloud-DevOps-Engineer ...](https://myportal.utt.edu.tt/ICS/icsfs/a3e16595-6dd6-43f4-99a6-d7c1075fa875.pdf?target=214d774e-9fa5-4949-a68c-360befbc874f)  
[61] [Professional Cloud DevOps Engineer 認證| Learn](https://cloud.google.com/learn/certification/cloud-devops-engineer/?hl=zh-tw)  
[62] [wiki/google-cloud-certification.md at main · cloud-quickstart/wiki](https://github.com/cloud-quickstart/wiki/blob/main/google-cloud-certification.md)  
[63] [Certificación de Professional Cloud DevOps Engineer | Learn](https://cloud.google.com/learn/certification/cloud-devops-engineer/?hl=es-419)  
[64] [GCP-pdevops devops engineer exam prepearitaon guide - Slideshare](https://www.slideshare.net/slideshow/gcp-pdevops-devops-engineer-exam-prepearitaon-guide/280618481?nway-conten=)  
[65] [Part-124: 🌥️Understanding Google Cloud Resource Hierarchy](https://dev.to/latchudevops/part-124-understanding-google-cloud-resource-hierarchy-made-simple-2nnj)  
[66] [Cloud Build documentation - Google Cloud](https://docs.cloud.google.com/build/docs)  
[67] [Documentation Cloud Deploy | Google Cloud](https://cloud.google.com/deploy/docs?authuser=9&%3Bhl=fr&hl=fr)  
[68] [Google Cloud Resource Hierarchy - Medium](https://medium.com/cloudnloud/google-cloud-resource-hierarchy-9fa3570abe1c)  
[69] [GoogleCloudPlatform/cloud-deploy-tutorials - GitHub](https://github.com/GoogleCloudPlatform/cloud-deploy-tutorials)  
[70] [Google Cloud Platform Resource Hierarchy - e-dialog](https://e-dialog.group/en/blog/google-cloud-platform-resource-hierarchy/)  
[71] [Understanding Google Cloud Resource Hierarchy: Organize ...](https://nithinsunke.wordpress.com/2025/08/09/understanding-google-cloud-resource-hierarchy-organize-secure-and-scale-efficiently/)  
[72] [Basic deployment instructions - Cloud.gov Docs](https://docs.cloud.gov/platform/deployment/)  
[73] [Using resource hierarchy for access control](https://docs.cloud.google.com/iam/docs/resource-hierarchy-access-control)  
[74] [Deployments | Cloud Deployment Manager Documentation | Google Cloud](https://cloud.google.com/deployment-manager/docs/reference/latest/deployments?hl=zh-cn)  
[75] [Mapping your organization with the Google Cloud Platform resource ...](https://cloud.google.com/blog/products/gcp/mapping-your-organization-with-the-Google-Cloud-Platform-resource-hierarchy)  
[76] [Introducing Cloud Deploy - YouTube](https://www.youtube.com/watch?v=Il8FlhR9jKM)  
[77] [Google Cloud Monitoring Overview Guide | PDF - Scribd](https://www.scribd.com/presentation/931032388/Google-Cloud-Monitoring)  
[78] [Ringkasan Artifact Registry | Google Cloud](https://cloud.google.com/artifact-registry/docs/overview?authuser=09&hl=id)  
[79] [Cloud Logging - Maps Platform - Google for Developers](https://developers.google.com/maps/documentation/mobility/operations/cloud-logging)  
[80] [Artifact Registry の概要 | Artifact Registry documentation | Google Cloud](https://cloud.google.com/artifact-registry/docs/overview?authuser=09&%3Bhl=ja&hl=ja)  
[81] [Artifact Registry 簡介 | Artifact Registry documentation | Google Cloud](https://cloud.google.com/artifact-registry/docs/overview?authuser=19&%3Bhl=zh-tw&hl=zh-tw)  
[82] [Google Cloud Monitoring Tool | Real-time GCP Performance](https://www.manageengine.com/products/applications_manager/google-cloud-monitoring.html)  
[83] [Understanding Artifact Registry vs. Container Registry - Google Cloud](https://cloud.google.com/blog/products/application-development/understanding-artifact-registry-vs-container-registry)  
[84] [Cloud Monitoring API . services . serviceLevelObjectives](https://developers.google.com/resources/api-libraries/documentation/monitoring/v3/python/latest/monitoring_v3.services.serviceLevelObjectives.html)  
[85] [Site Reliability Engineering: Applying SRE Principles ...](https://books.google.com/books/about/Site_Reliability_Engineering.html?id=GsmZ0QEACAAJ)  
[86] [Esplora la documentazione di GKE | Google Kubernetes Engine (GKE) | Google Cloud Documentation](https://docs.cloud.google.com/kubernetes-engine/docs/about?authuser=8&hl=it)  
[87] [Introduction to Grafana SLO | Grafana Cloud documentation](https://grafana.com/docs/grafana-cloud/alerting-and-irm/slo/introduction/)  
[88] [Site Reliability Engineering: How Google Runs Production Systems](https://research.google/pubs/site-reliability-engineering-how-google-runs-production-systems/)  
[89] [Documentazione di Google Kubernetes Engine | Google Kubernetes Engine (GKE) | Google Cloud](https://cloud.google.com/kubernetes-engine/docs?authuser=00&%3Bhl=it&hl=it)  
[90] [Objectifs de niveau de service (SLOs) - Amazon CloudWatch](https://docs.aws.amazon.com/fr_fr/AmazonCloudWatch/latest/monitoring/CloudWatch-ServiceLevelObjectives.html)  
[91] [Kubernetes Documentation](https://kubernetes.io/docs/home/)  
[92] [How audit logs work](https://orca.security/glossary/audit-logs/)  
[93] [Logging IP traffic using VPC Flow Logs - Amazon Virtual Private Cloud](https://docs.aws.amazon.com/vpc/latest/userguide/flow-logs.html)  
[94] [A Beginner's Guide to VPC Flow Logs in AWS | Amazon Web Services | Virtual Private Cloud | Whizlabs](https://www.youtube.com/watch?v=P-RFSaMLfH4)  
[95] [Best practices for working with Google Cloud Audit Logs](https://cloud.google.com/blog/products/management-tools/best-practices-for-working-with-google-cloud-audit-logging)  
[96] [VPC Flow Logs - Prashant Lakhera - Medium](https://devopslearning.medium.com/vpc-flow-logs-45eca8ae718b)  
[97] [Binary Authorization | Google Cloud](https://medium.com/google-cloud/binary-authorization-google-cloud-8bd96e6a3c4)  
[98] [Audit logging | Cloud Search - Google for Developers](https://developers.google.com/workspace/cloud-search/docs/guides/audit-logging-manual)  
[99] [Understanding VPC Flow Logs in AWS: An In-Depth Analysis](https://medium.com/codex/understanding-vpc-flow-logs-in-aws-an-in-depth-analysis-0fdf001152bc?sk=0f82a93835452d241aa21630fdc6a38b)  
[100] [Binary Authorization - Container Security - innFactory](https://innfactory.de/en/cloud/gcp/products/binary-authorization/)  
[101] [CloudDebugger - the exploration tool for Azure cloud developers](https://github.com/tndata/CloudDebugger)  
[102] [GitHub - googleapis/cloud-profiler-nodejs: Node.js library for Google ...](https://github.com/googleapis/cloud-profiler-nodejs)  
[103] [Node.js client library](https://cloud.google.com/nodejs/docs/reference/debug-agent/latest)  
[104] [google-cloud-trace - PyPI](https://pypi.org/project/google-cloud-trace/)  
[105] [Google Cloud Profiler Tutorial: Architecture, Pricing, Use Cases, and ...](https://www.devopsschool.com/tutorials/google-cloud-profiler-tutorial-architecture-pricing-use-cases-and-hands-on-guide-for-observability-and-monitoring/)  
[106] [GoogleCloudPlatform/cloud-trace-java - GitHub](https://github.com/GoogleCloudPlatform/cloud-trace-java)  
[107] [@google-cloud/profiler - npm](https://www.npmjs.com/package/@google-cloud/profiler)  
[108] [Cloud Debugger v5.0.4+20230113](http://byron.github.io/google-apis-rs/google_clouddebugger2_cli/)  
[109] [Module: Google::Cloud::Profiler - RubyDoc.info](https://preview.rubydoc.info/gems/google-cloud-profiler/Google/Cloud/Profiler)  
[110] [Quickstart | Skaffold](https://skaffold.dev/docs/quickstart/)  
[111] [Documentation Terraform sur Google Cloud | Google Cloud](https://cloud.google.com/docs/terraform?authuser=002&%3Bhl=fr&hl=fr)  
[112] [Documentazione di Cloud Code for VS Code | Google Cloud](https://cloud.google.com/code/docs/vscode?authuser=5&%3Bhl=it&hl=it)  
[113] [How-to Guides | Cloud Code for VS Code | Google Cloud](https://docs.cloud.google.com/code/docs/vscode/how-to)  
[114] [GitHub - getnick80/skaffold](https://github.com/getnick80/skaffold)  
[115] [Documentación de Cloud Code para VS Code | Cloud Code for VS Code | Google Cloud Documentation](https://docs.cloud.google.com/code/docs/vscode?authuser=1&hl=es-419)  
[116] [Vista geral do Cloud Code | Cloud Code for VS Code | Google Cloud Documentation](https://docs.cloud.google.com/code/docs/vscode/overview?authuser=3&hl=pt)
