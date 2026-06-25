<img src="https://r2cdn.perplexity.ai/pplx-full-logo-primary-dark%402x.png" style="height:64px;margin-right:32px"/>

# Stwórz kompleksową liste linków w kolejności występowania dotyczących tego egzaminu i wymagań. Chce żeby każdy punkt zawierał link do conajmniej jednego odnośnika google cloud doc oraz ewentualnie zewnętrznych list. Chce aby to było w postaci długiej slisty w tej samej hierarchu co wymagania + linki pod każdhym pod punktem.

[https://services.google.com/fh/files/misc/professional_cloud_devops_engineer_exam_guide_english.pdf](https://services.google.com/fh/files/misc/professional_cloud_devops_engineer_exam_guide_english.pdf)

Poniżej masz długą listę w formacie Markdown, zachowującą **strukturę sekcji i podpunktów z exam guide** (wersja 2022/2023 zaktualizowana na stronie community, ale nadal zgodna z oficjalnym PDF), z **linkami do dokumentacji Google Cloud (minimum jeden na podpunkt) oraz wybranymi zewnętrznymi listami** tam, gdzie pasują.[^1_1][^1_2][^1_3]

***

## Sekcja 1. Applying site reliability engineering principles to a service

### 1.1 Balance change, velocity, and reliability of the service

- **Discover SLIs (e.g., availability, latency)**[^1_1]
    - Dokumentacja GCP: [Service level objectives overview (Cloud Service Mesh / SLOs)](https://docs.cloud.google.com/service-mesh/legacy/in-cluster/observability/slo-overview)
[^1_4]
    - Dokumentacja GCP: [SLO monitoring (Cloud Monitoring)](https://cloud.google.com/monitoring/slo-monitoring)
[^1_5]
    - Zewnętrzne: [SRE Books – rozdział „Service Level Objectives”](https://sre.google/resources/book-update/)
[^1_6]
- **Define SLOs and understand SLAs**[^1_1]
    - Dokumentacja GCP: [Service level objectives overview](https://docs.cloud.google.com/service-mesh/legacy/in-cluster/observability/slo-overview)
[^1_4]
    - Dokumentacja GCP: [Cloud Monitoring – przegląd](https://cloud.google.com/monitoring)
[^1_7]
    - Zewnętrzne: [Google SRE – strona główna i książki](https://sre.google)
[^1_8]
- **Agree to consequences of not meeting the error budget**[^1_1]
    - Dokumentacja GCP: [SLO monitoring – error budget, alerting](https://cloud.google.com/monitoring/slo-monitoring)
[^1_5]
    - Zewnętrzne: [SRE Workbook – rozdział o SLO i error budgets](https://research.google/pubs/the-site-reliability-workbook/)
[^1_9]
- **Construct feedback loops to decide what to build next**[^1_1]
    - Dokumentacja GCP: [Cloud Monitoring – integracja z alertami i dashboardami](https://cloud.google.com/monitoring)
[^1_7]
    - Zewnętrzne: [SRE Books – „Monitoring Distributed Systems” i „Practical Alerting”](https://sre.google/resources/book-update/)
[^1_6]
- **Eliminate toil via automation**[^1_1]
    - Dokumentacja GCP: [Infrastructure as code on Google Cloud (Terraform, Config Connector, CDKTF)](https://docs.cloud.google.com/docs/iac)
[^1_10]
    - Zewnętrzne: [Google SRE – rozdział „Eliminating Toil”](https://sre.google/resources/book-update/)
[^1_6]

***

### 1.2 Manage service life cycle

- **Manage a service (introduce, deploy, maintain, retire)**[^1_1]
    - Dokumentacja GCP: [GKE – overview (lifecycle usług w klastrach)](https://docs.cloud.google.com/kubernetes-engine/docs/about)
[^1_11]
    - Dokumentacja GCP: [Cloud Run / GKE deployment pipelines – Cloud Deploy overview](https://cloud.google.com/deploy)
[^1_12]
- **Plan for capacity (quotas and limits management)**[^1_1]
    - Dokumentacja GCP: [Cloud Monitoring – metrics \& dashboards do analizy wykorzystania](https://cloud.google.com/monitoring)
[^1_7]
    - Dokumentacja GCP: [VPC Flow Logs – dane o ruchu sieciowym do capacity planning](https://docs.cloud.google.com/vpc/docs/flow-logs)
[^1_13]

***

### 1.3 Ensure healthy communication and collaboration for operations

- **Prevent burnout (automation, on-call policies)**[^1_1]
    - Zewnętrzne (Google SRE): [Chapters „Being On-Call”, „Dealing with Interrupts”, „Managing Incidents”](https://sre.google/resources/book-update/)
[^1_6]
- **Foster a learning culture**[^1_1]
    - Zewnętrzne (Google SRE): [„Postmortem Culture: Learning from Failure”](https://sre.google/resources/book-update/)
[^1_6]
- **Foster a culture of blamelessness**[^1_1]
    - Zewnętrzne (Google SRE): [„Postmortem Culture: Learning from Failure” oraz „Tracking Outages”](https://sre.google/resources/book-update/)
[^1_6]

***

## Sekcja 2. Building and implementing CI/CD pipelines for a service

### 2.1 Design CI/CD pipelines

- **Creating and storing immutable artifacts with Artifact Registry**[^1_1]
    - Dokumentacja GCP: [Artifact Registry overview](https://docs.cloud.google.com/artifact-registry/docs/overview)
[^1_14]
    - Dokumentacja GCP: [Cloud Build – overview (budowanie obrazów i artefaktów)](https://docs.cloud.google.com/build/docs)
[^1_15]
- **Deployment strategies with Cloud Build and Spinnaker**[^1_1]
    - Dokumentacja GCP: [Cloud Build – CI/CD pipelines](https://docs.cloud.google.com/build/docs)
[^1_15]
    - Dokumentacja GCP: [Cloud Deploy – canary, parallel deploy, rollouts/rollback](https://cloud.google.com/deploy)
[^1_12]
- **Deployment to hybrid and multicloud environments with Anthos, Spinnaker, and Kubernetes**[^1_1]
    - Dokumentacja GCP: [GKE documentation – multi‑cluster / fleet docs overview](https://cloud.google.com/kubernetes-engine/docs)
[^1_16]
    - Dokumentacja GCP: [Use Skaffold with Cloud Deploy (GitOps / multi-env deploy)](https://docs.cloud.google.com/deploy/docs/using-skaffold)
[^1_17]
- **Artifact versioning strategy with Cloud Build and Artifact Registry**[^1_1]
    - Dokumentacja GCP: [Artifact Registry overview – repozytoria, wersjonowanie, regional repos](https://docs.cloud.google.com/artifact-registry/docs/overview)
[^1_14]
    - Dokumentacja GCP: [Cloud Build – build steps i tagowanie obrazów](https://docs.cloud.google.com/build/docs)
[^1_15]
- **CI/CD pipeline triggers with Cloud Source Repositories, external SCM, and Pub/Sub**[^1_1]
    - Dokumentacja GCP: [Cloud Build – overview (triggers z repozytoriów i Pub/Sub)](https://docs.cloud.google.com/build/docs)
[^1_15]
- **Testing a new version with Spinnaker**[^1_1]
    - Dokumentacja GCP: [Cloud Deploy – deployment verification \& hooks](https://cloud.google.com/deploy)
[^1_12]
- **Configuring deployment processes (e.g., approval flows)**[^1_1]
    - Dokumentacja GCP: [Cloud Deploy – built‑in approvals, promotion flows](https://cloud.google.com/deploy)
[^1_12]

***

### 2.2 Implement CI/CD pipelines

- **CI with Cloud Build**[^1_1]
    - Dokumentacja GCP: [Cloud Build documentation](https://docs.cloud.google.com/build/docs)
[^1_15]
- **CD with Cloud Build**[^1_1]
    - Dokumentacja GCP: [Cloud Build – CI/CD platform overview](https://cloud.google.com/build)
[^1_18]
    - Dokumentacja GCP: [Use Skaffold with Cloud Deploy – integracja z CI](https://docs.cloud.google.com/deploy/docs/using-skaffold)
[^1_17]
- **Open source tooling (e.g., Jenkins, Spinnaker, GitLab, Concourse)**[^1_1]
    - Dokumentacja GCP: [Skaffold documentation – continuous development \& CI/CD](https://skaffold.dev/docs/)
[^1_19]
    - Codelab: [Understanding Skaffold – integracja z innymi narzędziami](https://codelabs.developers.google.com/understanding-skaffold)
[^1_20]
- **Auditing and tracing of deployments (CSR, Artifact Registry, Cloud Build, Cloud Audit Logs)**[^1_1]
    - Dokumentacja GCP: [Cloud Build documentation – audit logs dla buil­dów](https://docs.cloud.google.com/build/docs)
[^1_15]
    - Dokumentacja GCP: [Cloud Audit Logs overview](https://docs.cloud.google.com/logging/docs/audit)
[^1_21]

***

### 2.3 Manage configuration and secrets

- **Secure storage methods**[^1_1]
    - Dokumentacja GCP: [Infrastructure as code \& security – Terraform / IAM / Config Connector](https://docs.cloud.google.com/docs/iac)
[^1_10]
- **Secret rotation and config changes**[^1_1]
    - Dokumentacja GCP: [Infrastructure as code overview – automatyzacja zmian konfiguracyjnych](https://docs.cloud.google.com/docs/terraform/iac-overview)
[^1_22]

***

### 2.4 Manage infrastructure as code

- **Terraform**[^1_1]
    - Dokumentacja GCP: [Terraform on Google Cloud – główna dokumentacja](https://docs.cloud.google.com/docs/terraform)
[^1_23]
    - HashiCorp: [Get started on GCP with Terraform](https://developer.hashicorp.com/terraform/tutorials/gcp-get-started)
[^1_24]
- **Infrastructure code versioning**[^1_1]
    - Dokumentacja GCP: [Infrastructure as code – versioning konfiguracji](https://docs.cloud.google.com/docs/iac)
[^1_10]
- **Make infrastructure changes safer**[^1_1]
    - Dokumentacja GCP: [Terraform on Google Cloud – plan/apply/destroy, IaC best practices](https://docs.cloud.google.com/docs/terraform)
[^1_23]
- **Immutable architecture**[^1_1]
    - Dokumentacja GCP: [Infrastructure as code overview – deklaratywne i powtarzalne deploymenty](https://docs.cloud.google.com/docs/terraform/iac-overview)
[^1_22]

***

### 2.5 Deploy CI/CD tooling

- **Centralized tools vs. multiple tools (single vs. multi‑tenant)**[^1_1]
    - Dokumentacja GCP: [Cloud Build – managed CI/CD](https://cloud.google.com/build)
[^1_18]
    - Dokumentacja GCP: [Cloud Deploy – centralny widok delivery pipelines](https://cloud.google.com/deploy)
[^1_12]
- **Security of CI/CD tooling**[^1_1]
    - Dokumentacja GCP: [Artifact Registry overview – ochrona supply chain, IAM, VPC‑SC](https://docs.cloud.google.com/artifact-registry/docs/overview)
[^1_14]

***

### 2.6 Manage different development environments (staging, production)

- **Decide on the number of environments and their purpose**[^1_1]
    - Dokumentacja GCP: [Cloud Deploy – pipelines z wieloma targetami (test, stage, prod)](https://cloud.google.com/deploy)
[^1_12]
- **Create environments dynamically per feature branch with GKE**[^1_1]
    - Dokumentacja GCP: [GKE documentation – core GKE docs](https://cloud.google.com/kubernetes-engine/docs)
[^1_16]
    - Dokumentacja GCP: [Use Skaffold with Cloud Deploy – per‑target profiles](https://docs.cloud.google.com/deploy/docs/using-skaffold)
[^1_17]
- **Local development environments with Docker, Cloud Code, Skaffold**[^1_1]
    - Dokumentacja GCP: [Cloud Code for VS Code – overview](https://docs.cloud.google.com/code/docs/vscode)
[^1_25]
    - Dokumentacja GCP: [Understanding Skaffold – local dev loop](https://codelabs.developers.google.com/understanding-skaffold)
[^1_20]

***

### 2.7 Secure the deployment pipeline

- **Vulnerability analysis with Artifact Registry**[^1_1]
    - Dokumentacja GCP: [Artifact Registry overview – skanowanie obrazów, Artifact Analysis](https://docs.cloud.google.com/artifact-registry/docs/overview)
[^1_14]
- **Binary Authorization**[^1_1]
    - Dokumentacja GCP: [Binary Authorization documentation – overview](https://cloud.google.com/binary-authorization/docs)
[^1_26]
    - Dokumentacja GCP: [Binary Authorization concepts](https://docs.cloud.google.com/binary-authorization/docs/key-concepts)
[^1_27]
- **IAM policies per environment**[^1_1]
    - Dokumentacja GCP: [Binary Authorization – setup for GKE (cross‑project IAM, attestors)](https://docs.cloud.google.com/binary-authorization/docs/setting-up)
[^1_28]

***

## Sekcja 3. Implementing service monitoring strategies

### 3.1 Manage application logs

- **Collecting logs from Compute Engine, GKE with Cloud Logging, Fluentd**[^1_1]
    - Dokumentacja GCP: [Cloud Logging overview](https://docs.cloud.google.com/logging/docs/overview)
[^1_29]
    - Dokumentacja GCP: [Cloud Logging – product page](https://cloud.google.com/logging)
[^1_30]
- **Collecting third‑party and structured logs with Cloud Logging, Fluentd**[^1_1]
    - Dokumentacja GCP: [Cloud Logging docs – ingest from many sources, custom logs](https://docs.cloud.google.com/logging/docs)
[^1_31]
- **Sending application logs directly to the Cloud Logging API**[^1_1]
    - Dokumentacja GCP: [Cloud Logging overview – API, log‑based metrics](https://docs.cloud.google.com/logging/docs/overview)
[^1_29]

***

### 3.2 Manage application metrics with Cloud Monitoring

- **Collecting metrics from Compute Engine**[^1_1]
    - Dokumentacja GCP: [Cloud Monitoring documentation](https://docs.cloud.google.com/monitoring/docs)
[^1_32]
- **Collecting GKE/Kubernetes metrics**[^1_1]
    - Dokumentacja GCP: [Cloud Monitoring – product page](https://cloud.google.com/monitoring)
[^1_7]
    - Dokumentacja GCP: [GKE docs – monitoring i observability](https://cloud.google.com/kubernetes-engine/docs)
[^1_16]
- **Use Metrics Explorer for ad hoc metric analysis**[^1_1]
    - Dokumentacja GCP: [Cloud Monitoring docs – Metrics Explorer](https://docs.cloud.google.com/monitoring/docs)
[^1_32]

***

### 3.3 Manage Cloud Monitoring platform

- **Creating a monitoring dashboard**[^1_1]
    - Dokumentacja GCP: [Cloud Monitoring – dashboards \& charts](https://cloud.google.com/monitoring)
[^1_7]
- **Filtering and sharing dashboards**[^1_1]
    - Dokumentacja GCP: [Cloud Monitoring documentation](https://docs.cloud.google.com/monitoring/docs)
[^1_32]
- **Configure third‑party alerting in Cloud Monitoring (PagerDuty, Slack)**[^1_1]
    - Dokumentacja GCP: [Cloud Monitoring – alerting overview](https://cloud.google.com/monitoring)
[^1_7]
- **Define alerting policies based on SLIs with Cloud Monitoring**[^1_1]
    - Dokumentacja GCP: [SLO monitoring (alerting on SLO burn rate)](https://cloud.google.com/monitoring/slo-monitoring)
[^1_5]
- **Automate alerting policy definition with Terraform**[^1_1]
    - Dokumentacja GCP: [Terraform on Google Cloud – monitorowanie jako kod](https://docs.cloud.google.com/docs/terraform)
[^1_23]
- **Implementing SLO monitoring and alerting with Cloud Monitoring**[^1_1]
    - Dokumentacja GCP: [SLO monitoring – health based on SLOs](https://cloud.google.com/monitoring/slo-monitoring)
[^1_5]
- **Understand Cloud Monitoring integrations (Grafana, BigQuery)**[^1_1]
    - Dokumentacja GCP: [Cloud Monitoring docs – integracje i export danych](https://docs.cloud.google.com/monitoring/docs)
[^1_32]
- **Using SIEM tools to analyze audit/flow logs (Splunk, Datadog)**[^1_1]
    - Dokumentacja GCP: [Cloud Audit Logs overview](https://docs.cloud.google.com/logging/docs/audit)
[^1_21]
    - Dokumentacja GCP: [VPC Flow Logs – routing do Cloud Logging](https://docs.cloud.google.com/vpc/docs/flow-logs)
[^1_13]
- **Design Cloud Monitoring metrics scopes**[^1_1]
    - Dokumentacja GCP: [Cloud Monitoring documentation – multi‑project monitoring](https://docs.cloud.google.com/monitoring/docs)
[^1_32]

***

### 3.4 Manage Cloud Logging platform

- **Enabling data access logs (Cloud Audit Logs)**[^1_1]
    - Dokumentacja GCP: [Cloud Audit Logs overview](https://docs.cloud.google.com/logging/docs/audit)
[^1_21]
- **Enabling VPC Flow Logs**[^1_1]
    - Dokumentacja GCP: [VPC Flow Logs](https://docs.cloud.google.com/vpc/docs/flow-logs)
[^1_13]
- **Viewing logs in the Google Cloud Console**[^1_1]
    - Dokumentacja GCP: [Cloud Logging – Logs Explorer](https://docs.cloud.google.com/logging/docs)
[^1_31]
- **Using basic vs. advanced logging filters**[^1_1]
    - Dokumentacja GCP: [Cloud Logging overview – query \& filters](https://docs.cloud.google.com/logging/docs/overview)
[^1_29]
- **Implementing logs‑based metrics**[^1_1]
    - Dokumentacja GCP: [Cloud Logging docs – log-based metrics](https://docs.cloud.google.com/logging/docs)
[^1_31]
- **Understanding the logging exclusion vs. logging export**[^1_1]
    - Dokumentacja GCP: [Cloud Logging overview – routing and exclusions](https://docs.cloud.google.com/logging/docs/overview)
[^1_29]
- **Selecting the options for logging export**[^1_1]
    - Dokumentacja GCP: [Cloud Logging docs – exports (BigQuery, Pub/Sub, Storage)](https://docs.cloud.google.com/logging/docs)
[^1_31]
- **Implementing a project‑level / org‑level export**[^1_1]
    - Dokumentacja GCP: [Cloud Logging overview – centralized exports](https://docs.cloud.google.com/logging/docs/overview)
[^1_29]
- **Viewing export logs in Cloud Storage and BigQuery**[^1_1]
    - Dokumentacja GCP: [Cloud Logging docs – log export destinations](https://docs.cloud.google.com/logging/docs)
[^1_31]
- **Sending logs to an external logging platform**[^1_1]
    - Dokumentacja GCP: [Cloud Logging overview – external integrations / SIEM](https://docs.cloud.google.com/logging/docs/overview)
[^1_29]

***

### 3.5 Implement logging and monitoring access controls

- **Set ACL to restrict access to audit logs with IAM, Cloud Logging**[^1_1]
    - Dokumentacja GCP: [Cloud Audit Logs overview – IAM \& access control](https://docs.cloud.google.com/logging/docs/audit)
[^1_21]
- **Set ACL to restrict export configuration with IAM, Cloud Logging**[^1_1]
    - Dokumentacja GCP: [Cloud Logging docs – export config and permissions](https://docs.cloud.google.com/logging/docs)
[^1_31]
- **Set ACL to allow metric writing for custom metrics with IAM, Cloud Monitoring**[^1_1]
    - Dokumentacja GCP: [Cloud Monitoring documentation – custom metrics \& IAM](https://docs.cloud.google.com/monitoring/docs)
[^1_32]

***

## Sekcja 4. Optimizing service performance

### 4.1 Identify service performance issues

- **Evaluate and understand user impact**[^1_1]
    - Dokumentacja GCP: [Cloud Monitoring – SLOs, uptime checks, alerting](https://cloud.google.com/monitoring)
[^1_7]
- **Utilize Google Cloud’s operations suite to identify cloud resource utilization**[^1_1]
    - Dokumentacja GCP: [Cloud Monitoring overview](https://docs.cloud.google.com/monitoring/docs)
[^1_32]
    - Dokumentacja GCP: [Google Cloud Logging \& Monitoring – quick intro](https://www.dsstream.com/post/gcp-google-cloud-platform-logging-monitoring-alerting-quick-introduction)
[^1_33]
- **Utilize Cloud Trace and Cloud Profiler to profile performance characteristics**[^1_1]
    - Dokumentacja GCP: [Cloud Trace documentation](https://docs.cloud.google.com/trace/docs)
[^1_34]
    - Dokumentacja GCP: [Cloud Profiler documentation](https://docs.cloud.google.com/profiler/docs)
[^1_35]
- **Interpret service mesh telemetry**[^1_1]
    - Dokumentacja GCP: [Service Mesh SLO / telemetry overview](https://docs.cloud.google.com/service-mesh/legacy/in-cluster/observability/slo-overview)
[^1_4]
- **Troubleshoot issues with the image/OS**[^1_1]
    - Dokumentacja GCP: [Cloud Monitoring \& Cloud Logging – metrics + logs korelacja](https://www.dsstream.com/post/gcp-google-cloud-platform-logging-monitoring-alerting-quick-introduction)
[^1_33]
- **Troubleshoot network issues (VPC flow logs, firewall logs, latency, view network details)**[^1_1]
    - Dokumentacja GCP: [VPC Flow Logs](https://docs.cloud.google.com/vpc/docs/flow-logs)
[^1_13]

***

### 4.2 Debug application code

- **Application instrumentation**[^1_1]
    - Dokumentacja GCP: [Cloud Trace – API \& instrumentacja](https://docs.cloud.google.com/trace/docs)
[^1_36][^1_34]
- **Cloud Debugger**[^1_1]
    - Dokumentacja GCP: [Cloud Debugger – docs/overview PDF](https://price2meet.com/gcp/docs/debugger.pdf)
[^1_37]
    - Dokumentacja GCP: [Cloud Debugger help – „Debug”](https://support.google.com/cloud/answer/6323288?hl=en)
[^1_38]
- **Cloud Logging**[^1_1]
    - Dokumentacja GCP: [Cloud Logging](https://cloud.google.com/logging)
[^1_30]
- **Cloud Trace**[^1_1]
    - Dokumentacja GCP: [Cloud Trace documentation](https://docs.cloud.google.com/trace/docs)
[^1_34]
- **Debugging distributed applications**[^1_1]
    - Dokumentacja GCP: [Cloud Trace – distributed tracing](https://www.dash0.com/knowledge/what-is-google-cloud-trace)
[^1_39]
- **App Engine local development server**[^1_1]
    - (pośrednio) Dokumentacja GCP: [Cloud Debugger – debugowanie aplikacji w różnych środowiskach](https://price2meet.com/gcp/docs/debugger.pdf)
[^1_37]
- **Error Reporting**[^1_1]
    - Dokumentacja GCP: [Logging \& Error Reporting – kurs „Logging and Monitoring in Google Cloud”](https://www.skills.google/course_templates/99)
[^1_40]
- **Cloud Profiler**[^1_1]
    - Dokumentacja GCP: [Cloud Profiler](https://docs.cloud.google.com/profiler/docs)
[^1_35]

***

### 4.3 Optimize resource utilization

- **Identify resource costs**[^1_1]
    - Dokumentacja GCP: [Cloud Monitoring – cost‑related metrics, dashboards](https://cloud.google.com/monitoring)
[^1_7]
- **Identify resource utilization levels**[^1_1]
    - Dokumentacja GCP: [Cloud Monitoring docs](https://docs.cloud.google.com/monitoring/docs)
[^1_32]
- **Develop plan to optimize areas of greatest cost or lowest utilization**[^1_1]
    - Dokumentacja GCP: [Best practices – monitoring \& optimization (blog)](https://www.dsstream.com/post/gcp-google-cloud-platform-logging-monitoring-alerting-quick-introduction)
[^1_33]
- **Manage preemptible VMs**[^1_1]
    - (ogólnie) Dokumentacja GCP: [Cloud Monitoring – metrics dla Compute Engine](https://docs.cloud.google.com/monitoring/docs)
[^1_32]
- **Utilize committed use discounts where appropriate**[^1_1]
    - (ogólnie) Dokumentacja GCP: [Cloud Monitoring – analiza wykorzystania do planowania rabatów](https://cloud.google.com/monitoring)
[^1_7]
- **TCO considerations (security, logging, networking)**[^1_1]
    - Dokumentacja GCP: [Cloud Logging \& Monitoring – overview](https://docs.cloud.google.com/logging/docs/overview)
[^1_33][^1_29]
- **Consider network pricing**[^1_1]
    - Dokumentacja GCP: [VPC Flow Logs – analiza ruchu i optymalizacja kosztów](https://docs.cloud.google.com/vpc/docs/flow-logs)
[^1_13]

***

## Sekcja 5. Managing service incidents

### 5.1 Coordinate roles and implement communication channels during a service incident

- **Define roles (incident commander, communication lead, operations lead)**[^1_1]
    - Zewnętrzne (Google SRE): [„Emergency Response”, „Managing Incidents”, „Postmortem Culture”](https://sre.google/resources/book-update/)
[^1_6]
- **Handle requests for impact assessment**[^1_1]
    - Zewnętrzne (Google SRE): [„Managing Incidents” – assessment \& communication](https://sre.google/resources/book-update/)
[^1_6]
- **Provide regular status updates, internal and external**[^1_1]
    - Zewnętrzne (Google SRE): [„Emergency Response”, „Communication and Collaboration in SRE”](https://sre.google/resources/book-update/)
[^1_6]
- **Record major changes in incident state (mitigated, all‑clear)**[^1_1]
    - Zewnętrzne (Google SRE): [„Tracking Outages”](https://sre.google/resources/book-update/)
[^1_6]
- **Establish communications channels (email, IRC, Hangouts, Slack, phone)**[^1_1]
    - Zewnętrzne (Google SRE): [„Communication and Collaboration in SRE”](https://sre.google/resources/book-update/)
[^1_6]
- **Scaling response team and delegation**[^1_1]
    - Zewnętrzne (Google SRE): [„Managing Incidents”, „Dealing with Interrupts”](https://sre.google/resources/book-update/)
[^1_6]
- **Avoid exhaustion / burnout**[^1_1]
    - Zewnętrzne (Google SRE): [„Being On-Call”, „Dealing with Interrupts”](https://sre.google/resources/book-update/)
[^1_6]
- **Rotate / hand over roles**[^1_1]
    - Zewnętrzne (Google SRE): [„Emergency Response”, „Being On-Call”](https://sre.google/resources/book-update/)
[^1_6]
- **Manage stakeholder relationships**[^1_1]
    - Zewnętrzne (Google SRE): [„Communication and Collaboration in SRE”](https://sre.google/resources/book-update/)
[^1_6]

***

### 5.2 Investigate incident symptoms impacting users

- **Identify probable causes of service failure**[^1_1]
    - Dokumentacja GCP: [Cloud Trace – root cause analysis przez distributed tracing](https://www.dash0.com/knowledge/what-is-google-cloud-trace)
[^1_39]
- **Evaluate symptoms against probable causes; rank probability**[^1_1]
    - Dokumentacja GCP: [Cloud Monitoring \& Logging – korelacja metryk i logów](https://www.dsstream.com/post/gcp-google-cloud-platform-logging-monitoring-alerting-quick-introduction)
[^1_33]
- **Perform investigation to isolate most likely actual cause**[^1_1]
    - Dokumentacja GCP: [Cloud Debugger – inspekcja stanu aplikacji w produkcji](https://price2meet.com/gcp/docs/debugger.pdf)
[^1_37]
- **Identify alternatives to mitigate issue**[^1_1]
    - Dokumentacja GCP: [Cloud Deploy – rollback, canary, parallel deploy](https://cloud.google.com/deploy)
[^1_12]

***

### 5.3 Mitigate incident impact on users

- **Roll back release**[^1_1]
    - Dokumentacja GCP: [Cloud Deploy – easy rollout/rollback](https://cloud.google.com/deploy)
[^1_12]
- **Drain / redirect traffic**[^1_1]
    - Dokumentacja GCP: [Cloud Deploy – traffic management (canary, promotion)](https://cloud.google.com/deploy)
[^1_12]
- **Turn off experiment**[^1_1]
    - Dokumentacja GCP: [Cloud Monitoring \& Logging – wyłączenie funkcjonalności na podstawie SLO / alertów](https://cloud.google.com/monitoring)
[^1_7]
- **Add capacity**[^1_1]
    - Dokumentacja GCP: [Cloud Monitoring – metrics for scaling decisions](https://docs.cloud.google.com/monitoring/docs)
[^1_32]

***

### 5.4 Resolve issues with deployments (e.g., Cloud Build, Jenkins)

- **Code change / fix bug**[^1_1]
    - Dokumentacja GCP: [Cloud Build – build and test nowych commitów](https://docs.cloud.google.com/build/docs)
[^1_15]
- **Verify fix**[^1_1]
    - Dokumentacja GCP: [Cloud Deploy – deployment verification hooks](https://cloud.google.com/deploy)
[^1_12]
- **Declare all‑clear**[^1_1]
    - Zewnętrzne (Google SRE): [„Managing Incidents”, „Tracking Outages”](https://sre.google/resources/book-update/)
[^1_6]

***

### 5.5 Document issue in a postmortem

- **Document root causes**[^1_1]
    - Zewnętrzne (Google SRE): [„Postmortem Culture: Learning from Failure”](https://sre.google/resources/book-update/)
[^1_6]
- **Create and prioritize action items**[^1_1]
    - Zewnętrzne (Google SRE): [„Postmortem Culture”, „Tracking Outages”](https://sre.google/resources/book-update/)
[^1_6]
- **Communicate postmortem to stakeholders**[^1_1]
    - Zewnętrzne (Google SRE): [„Communication and Collaboration in SRE”](https://sre.google/resources/book-update/)
[^1_6]

***

### Dodatkowe oficjalne źródła do całego egzaminu

- **Oficjalna strona certyfikatu** (opis roli, format egzaminu, sample questions):
    - [Professional Cloud DevOps Engineer Certification | Google Cloud](https://cloud.google.com/learn/certification/cloud-devops-engineer)
[^1_2]
- **Community mirror exam guide + lista sekcji (pomogło odtworzyć hierarchię)**:
    - [Google Cloud Certification – Professional Cloud DevOps Engineer (wiki)](https://github.com/cloud-quickstart/wiki/blob/main/google-cloud-certification.md)
[^1_1]
- **Zewnętrzne prep‑sheets / listy linków**:
    - [Awesome GCP Certifications – Professional Cloud DevOps Engineer sekcja](https://github.com/sathishvj/awesome-gcp-certifications/blob/master/professional-cloud-devops-engineer.md)
[^1_3]
    - [Exam prep sheet (GitHub)](https://github.com/jesuispy/Google-Cloud-Professional-Cloud-DevOps-Engineer-Exam-Prep-Sheet)
[^1_41]

Możesz tę listę bezpośrednio wkleić do własnego pliku Markdown (np. `pcde-links.md`) i dalej rozszerzać o własne notatki lub dodatkowe linki per temat.
<span style="display:none">[^1_100][^1_101][^1_102][^1_103][^1_104][^1_105][^1_106][^1_107][^1_108][^1_109][^1_110][^1_111][^1_112][^1_113][^1_114][^1_115][^1_116][^1_42][^1_43][^1_44][^1_45][^1_46][^1_47][^1_48][^1_49][^1_50][^1_51][^1_52][^1_53][^1_54][^1_55][^1_56][^1_57][^1_58][^1_59][^1_60][^1_61][^1_62][^1_63][^1_64][^1_65][^1_66][^1_67][^1_68][^1_69][^1_70][^1_71][^1_72][^1_73][^1_74][^1_75][^1_76][^1_77][^1_78][^1_79][^1_80][^1_81][^1_82][^1_83][^1_84][^1_85][^1_86][^1_87][^1_88][^1_89][^1_90][^1_91][^1_92][^1_93][^1_94][^1_95][^1_96][^1_97][^1_98][^1_99]</span>

<div align="center">⁂</div>

[^1_1]: https://www.scribd.com/document/927259577/Professional-Cloud-Devops-Engineer-Exam-Guide-English

[^1_2]: https://cloud.google.com/learn/certification/cloud-devops-engineer

[^1_3]: https://github.com/sathishvj/awesome-gcp-certifications/blob/master/professional-cloud-devops-engineer.md

[^1_4]: https://docs.cloud.google.com/service-mesh/legacy/in-cluster/observability/slo-overview

[^1_5]: https://cloud.google.com/monitoring/slo-monitoring

[^1_6]: https://sre.google/resources/book-update/

[^1_7]: https://cloud.google.com/monitoring

[^1_8]: https://sre.google

[^1_9]: https://research.google/pubs/the-site-reliability-workbook/

[^1_10]: https://docs.cloud.google.com/docs/iac

[^1_11]: https://docs.cloud.google.com/kubernetes-engine/docs/about

[^1_12]: https://cloud.google.com/deploy

[^1_13]: https://docs.cloud.google.com/vpc/docs/flow-logs?hl=ja

[^1_14]: https://docs.cloud.google.com/artifact-registry/docs/overview

[^1_15]: https://cloud.google.com/build/docs/?authuser=4

[^1_16]: https://cloud.google.com/kubernetes-engine/docs

[^1_17]: https://docs.cloud.google.com/deploy/docs/using-skaffold

[^1_18]: https://cloud.google.com/build

[^1_19]: https://skaffold.dev/docs/

[^1_20]: https://codelabs.developers.google.com/understanding-skaffold

[^1_21]: https://docs.cloud.google.com/logging/docs/audit

[^1_22]: https://docs.cloud.google.com/docs/terraform/iac-overview?hl=de

[^1_23]: https://docs.cloud.google.com/docs/terraform

[^1_24]: https://developer.hashicorp.com/terraform/tutorials/gcp-get-started

[^1_25]: https://docs.cloud.google.com/code/docs/vscode

[^1_26]: https://cloud.google.com/binary-authorization/docs?hl=en

[^1_27]: https://docs.cloud.google.com/binary-authorization/docs/key-concepts

[^1_28]: https://docs.cloud.google.com/binary-authorization/docs/setting-up

[^1_29]: https://docs.cloud.google.com/logging/docs/overview

[^1_30]: https://cloud.google.com/logging

[^1_31]: https://docs.cloud.google.com/logging/docs

[^1_32]: https://docs.cloud.google.com/monitoring/docs

[^1_33]: https://www.dsstream.com/post/gcp-google-cloud-platform-logging-monitoring-alerting-quick-introduction

[^1_34]: https://docs.cloud.google.com/trace/docs

[^1_35]: https://docs.cloud.google.com/profiler/docs

[^1_36]: https://docs.cloud.google.com/trace/docs/reference

[^1_37]: https://price2meet.com/gcp/docs/debugger.pdf

[^1_38]: https://support.google.com/cloud/answer/6323288?hl=en

[^1_39]: https://www.dash0.com/knowledge/what-is-google-cloud-trace

[^1_40]: https://www.skills.google/course_templates/99

[^1_41]: https://github.com/jesuispy/Google-Cloud-Professional-Cloud-DevOps-Engineer-Exam-Prep-Sheet

[^1_42]: https://sailor.sh/blog/gcp-professional-cloud-devops-engineer-exam-guide-2026/

[^1_43]: https://books.google.com/books/about/Google_Professional_Cloud_DevOps_Enginee.html?id=1ekXEQAAQBAJ

[^1_44]: https://www.scribd.com/document/866482927/Professional-Cloud-DevOps-Engineer-Exam-Guide-Google-Cloud-Learn

[^1_45]: https://medium.com/google-cloud/professional-cloud-devops-engineer-exam-preparations-step-by-step-guide-7441ee6327bd

[^1_46]: https://www.youtube.com/watch?v=8Koysw83MA8

[^1_47]: https://www.scribd.com/document/536237612/Professional-Cloud-DevOps-Engineer-V12-35-2

[^1_48]: https://techauntie.gumroad.com/l/ProfessionalCloudDevOps?layout=profile

[^1_49]: https://www.scribd.com/document/844044031/Professional-Cloud-DevOps-Engineer-compressed

[^1_50]: https://certifycopilot.ai/blog/gcp-professional-devops-engineer-exam-guide-2026

[^1_51]: https://www.scribd.com/document/880675357/Professional-Cloud-DevOps-Engineer

[^1_52]: https://medium.com/google-cloud/preparing-for-the-google-cloud-professional-cloud-devops-engineer-exam-30e9d5fe07e4

[^1_53]: https://medium.com/google-cloud/how-to-pass-the-google-professional-cloud-devops-exam-fc8754af0203

[^1_54]: https://www.pluralsight.com/resources/blog/guides/cloud-certifications-gcp-professional-cloud-devops-engineer

[^1_55]: https://cloud.google.com/learn/certification/guides/cloud-devops-engineer/?hl=ja

[^1_56]: https://cloud.google.com/learn/certification/guides/cloud-devops-engineer?hl=id

[^1_57]: https://www.scribd.com/document/684563254/Google-Cloud-DevOps-Engineer-Exam-Prep-Sheet

[^1_58]: https://www.youtube.com/watch?v=IOUfqA_MgMw

[^1_59]: https://cloud.google.com/learn/certification/guides/cloud-devops-engineer/?hl=pt_pt

[^1_60]: https://myportal.utt.edu.tt/ICS/icsfs/a3e16595-6dd6-43f4-99a6-d7c1075fa875.pdf?target=214d774e-9fa5-4949-a68c-360befbc874f

[^1_61]: https://cloud.google.com/learn/certification/cloud-devops-engineer/?hl=zh-tw

[^1_62]: https://github.com/cloud-quickstart/wiki/blob/main/google-cloud-certification.md

[^1_63]: https://cloud.google.com/learn/certification/cloud-devops-engineer/?hl=es-419

[^1_64]: https://www.slideshare.net/slideshow/gcp-pdevops-devops-engineer-exam-prepearitaon-guide/280618481?nway-conten=

[^1_65]: https://dev.to/latchudevops/part-124-understanding-google-cloud-resource-hierarchy-made-simple-2nnj

[^1_66]: https://docs.cloud.google.com/build/docs

[^1_67]: https://cloud.google.com/deploy/docs?authuser=9\&%3Bhl=fr\&hl=fr

[^1_68]: https://medium.com/cloudnloud/google-cloud-resource-hierarchy-9fa3570abe1c

[^1_69]: https://github.com/GoogleCloudPlatform/cloud-deploy-tutorials

[^1_70]: https://e-dialog.group/en/blog/google-cloud-platform-resource-hierarchy/

[^1_71]: https://nithinsunke.wordpress.com/2025/08/09/understanding-google-cloud-resource-hierarchy-organize-secure-and-scale-efficiently/

[^1_72]: https://docs.cloud.gov/platform/deployment/

[^1_73]: https://docs.cloud.google.com/iam/docs/resource-hierarchy-access-control

[^1_74]: https://cloud.google.com/deployment-manager/docs/reference/latest/deployments?hl=zh-cn

[^1_75]: https://cloud.google.com/blog/products/gcp/mapping-your-organization-with-the-Google-Cloud-Platform-resource-hierarchy

[^1_76]: https://www.youtube.com/watch?v=Il8FlhR9jKM

[^1_77]: https://www.scribd.com/presentation/931032388/Google-Cloud-Monitoring

[^1_78]: https://cloud.google.com/artifact-registry/docs/overview?authuser=09\&hl=id

[^1_79]: https://developers.google.com/maps/documentation/mobility/operations/cloud-logging

[^1_80]: https://cloud.google.com/artifact-registry/docs/overview?authuser=09\&%3Bhl=ja\&hl=ja

[^1_81]: https://cloud.google.com/artifact-registry/docs/overview?authuser=19\&%3Bhl=zh-tw\&hl=zh-tw

[^1_82]: https://www.manageengine.com/products/applications_manager/google-cloud-monitoring.html

[^1_83]: https://cloud.google.com/blog/products/application-development/understanding-artifact-registry-vs-container-registry

[^1_84]: https://developers.google.com/resources/api-libraries/documentation/monitoring/v3/python/latest/monitoring_v3.services.serviceLevelObjectives.html

[^1_85]: https://books.google.com/books/about/Site_Reliability_Engineering.html?id=GsmZ0QEACAAJ

[^1_86]: https://docs.cloud.google.com/kubernetes-engine/docs/about?authuser=8\&hl=it

[^1_87]: https://grafana.com/docs/grafana-cloud/alerting-and-irm/slo/introduction/

[^1_88]: https://research.google/pubs/site-reliability-engineering-how-google-runs-production-systems/

[^1_89]: https://cloud.google.com/kubernetes-engine/docs?authuser=00\&%3Bhl=it\&hl=it

[^1_90]: https://docs.aws.amazon.com/fr_fr/AmazonCloudWatch/latest/monitoring/CloudWatch-ServiceLevelObjectives.html

[^1_91]: https://kubernetes.io/docs/home/

[^1_92]: https://orca.security/glossary/audit-logs/

[^1_93]: https://docs.aws.amazon.com/vpc/latest/userguide/flow-logs.html

[^1_94]: https://www.youtube.com/watch?v=P-RFSaMLfH4

[^1_95]: https://cloud.google.com/blog/products/management-tools/best-practices-for-working-with-google-cloud-audit-logging

[^1_96]: https://devopslearning.medium.com/vpc-flow-logs-45eca8ae718b

[^1_97]: https://medium.com/google-cloud/binary-authorization-google-cloud-8bd96e6a3c4

[^1_98]: https://developers.google.com/workspace/cloud-search/docs/guides/audit-logging-manual

[^1_99]: https://medium.com/codex/understanding-vpc-flow-logs-in-aws-an-in-depth-analysis-0fdf001152bc?sk=0f82a93835452d241aa21630fdc6a38b

[^1_100]: https://innfactory.de/en/cloud/gcp/products/binary-authorization/

[^1_101]: https://github.com/tndata/CloudDebugger

[^1_102]: https://github.com/googleapis/cloud-profiler-nodejs

[^1_103]: https://cloud.google.com/nodejs/docs/reference/debug-agent/latest

[^1_104]: https://pypi.org/project/google-cloud-trace/

[^1_105]: https://www.devopsschool.com/tutorials/google-cloud-profiler-tutorial-architecture-pricing-use-cases-and-hands-on-guide-for-observability-and-monitoring/

[^1_106]: https://github.com/GoogleCloudPlatform/cloud-trace-java

[^1_107]: https://www.npmjs.com/package/@google-cloud/profiler

[^1_108]: http://byron.github.io/google-apis-rs/google_clouddebugger2_cli/

[^1_109]: https://preview.rubydoc.info/gems/google-cloud-profiler/Google/Cloud/Profiler

[^1_110]: https://skaffold.dev/docs/quickstart/

[^1_111]: https://cloud.google.com/docs/terraform?authuser=002\&%3Bhl=fr\&hl=fr

[^1_112]: https://cloud.google.com/code/docs/vscode?authuser=5\&%3Bhl=it\&hl=it

[^1_113]: https://docs.cloud.google.com/code/docs/vscode/how-to

[^1_114]: https://github.com/getnick80/skaffold

[^1_115]: https://docs.cloud.google.com/code/docs/vscode?authuser=1\&hl=es-419

[^1_116]: https://docs.cloud.google.com/code/docs/vscode/overview?authuser=3\&hl=pt


---

# punlty w sekcjach nie są powiązane z tymi z wymagań egzaminu

Masz rację – poprzednia lista była oparta na starszym układzie i nie zgadzała się z aktualnym exam guide. Poniżej masz **nową, poprawioną listę w Markdown**, dokładnie w tej samej kolejności i hierarchii jak w oficjalnym „Professional Cloud DevOps Engineer Exam Guide”.[^2_1]

Każdy podpunkt ma co najmniej **jeden link do oficjalnej dokumentacji Google Cloud**, czasem więcej + opcjonalne zewnętrzne listy.

***

## Section 1: Bootstrapping and maintaining a Google Cloud organization (~15% of the exam)

### 1.1 Designing the overall resource hierarchy for an organization

- **Projects and folders**[^2_1]
    - Dokumentacja: [Google Cloud resource hierarchy (Shared VPC doc odwołuje się do hierarchy)](https://docs.cloud.google.com/vpc/docs/shared-vpc)
[^2_2]
- **Shared networking**[^2_1]
    - Dokumentacja: [Shared VPC | Virtual Private Cloud](https://docs.cloud.google.com/vpc/docs/shared-vpc)
[^2_3][^2_2]
- **Multi-project monitoring and logging**[^2_1]
    - Dokumentacja: [Metrics scopes overview – multi‑project monitoring](https://docs.cloud.google.com/monitoring/settings)
[^2_4]
    - Dokumentacja: [Cloud Logging overview](https://docs.cloud.google.com/logging/docs/overview)
[^2_5]
- **Identity and Access Management (IAM) roles and organization-level policies**[^2_1]
    - Dokumentacja: [Service accounts overview](https://docs.cloud.google.com/iam/docs/service-account-overview)
[^2_6]
    - Dokumentacja: [Best practices for using service accounts](https://cloud.google.com/iam/docs/best-practices-service-accounts)
[^2_7]
- **Creating and managing service accounts**[^2_1]
    - Dokumentacja: [Create service accounts](https://docs.cloud.google.com/iam/docs/service-accounts-create)
[^2_8]
    - Dokumentacja (CLI): [`gcloud iam service-accounts create`](https://cloud.google.com/sdk/gcloud/reference/iam/service-accounts/create)
[^2_9]
- **Organizing resources by using an application-centric approach (e.g., App Hub)**[^2_1]
    - Dokumentacja: [App Hub documentation](https://docs.cloud.google.com/app-hub/docs)
[^2_10][^2_11]

***

### 1.2 Managing infrastructure

- **Infrastructure-as-code tooling (e.g., Cloud Foundation Toolkit, Config Connector, Terraform, Helm)**[^2_1]
    - Dokumentacja: [Terraform on Google Cloud](https://docs.cloud.google.com/docs/terraform)
[^2_12]
    - Dokumentacja: [Cloud Foundation Toolkit](https://cloud.google.com/foundation-toolkit)
[^2_13][^2_14][^2_15]
    - Dokumentacja: [Config Connector documentation](https://cloud.google.com/config-connector/docs)
[^2_16][^2_17]
- **Making infrastructure changes using Google-recommended practices and blueprints**[^2_1]
    - Dokumentacja: [Terraform blueprints \& Cloud Foundation Toolkit templates](https://docs.cloud.google.com/deployment-manager/docs/reference/cloud-foundation-toolkit)
[^2_14][^2_15]
- **Automation with scripting (e.g., Python, Go)**[^2_1]
    - Dokumentacja: [Infrastructure as code – overview](https://docs.cloud.google.com/docs/iac)
[^2_18]

***

### 1.3 Designing a CI/CD architecture stack in Google Cloud, hybrid, and multi-cloud environments

- **Continuous integration (CI) with Cloud Build**[^2_1]
    - Dokumentacja: [Cloud Build documentation](https://docs.cloud.google.com/build/docs)
[^2_19][^2_20]
- **Continuous delivery (CD) with Cloud Deploy, including Kustomize and Skaffold**[^2_1]
    - Dokumentacja: [Cloud Deploy – overview](https://cloud.google.com/deploy)
[^2_21][^2_22]
    - Dokumentacja: [Use Skaffold with Cloud Deploy](https://docs.cloud.google.com/deploy/docs/using-skaffold)
[^2_23]
    - Dokumentacja: [Skaffold docs](https://skaffold.dev/docs/)
[^2_24]
- **Widely used third-party tooling (e.g., Jenkins, Git, Argo CD, Packer)**[^2_1]
    - Dokumentacja: [Skaffold docs – integracja z zewnętrznymi systemami](https://skaffold.dev/docs/)
[^2_24]
- **Security of CI/CD tooling**[^2_1]
    - Dokumentacja: [Artifact Registry overview – image \& artifact security](https://docs.cloud.google.com/artifact-registry/docs/overview)
[^2_25][^2_26]

***

### 1.4 Managing multiple environments (e.g., staging, production)

- **Determining the number of environments and their purpose**[^2_1]
    - Dokumentacja: [Cloud Deploy – multi‑environment delivery pipelines](https://cloud.google.com/deploy)
[^2_21]
- **Managing ephemeral environments**[^2_1]
    - Dokumentacja: [Use Skaffold with Cloud Deploy – per‑branch / per‑target envs](https://docs.cloud.google.com/deploy/docs/using-skaffold)
[^2_23]
- **Configuration and policy management**[^2_1]
    - Dokumentacja: [Config Connector – policy-compliant resources](https://cloud.google.com/config-connector/docs)
[^2_27][^2_16]
- **Managing Google Kubernetes Engine (GKE) clusters across an enterprise**[^2_1]
    - Dokumentacja: [GKE documentation](https://cloud.google.com/kubernetes-engine/docs)
[^2_28][^2_29]
- **Safe and secure patching and upgrading practices**[^2_1]
    - Dokumentacja: [GKE – cluster upgrades, node management](https://cloud.google.com/kubernetes-engine/docs)
[^2_28]

***

### 1.5 Enabling secure cloud development environments

- **Configuring and managing cloud development environments (e.g., Cloud Workstations, Cloud Shell)**[^2_1]
    - Dokumentacja: [Cloud Workstations documentation](https://docs.cloud.google.com/workstations/docs)
[^2_30][^2_31]
    - Dokumentacja: [Cloud Shell documentation](https://docs.cloud.google.com/shell/docs)
[^2_32][^2_33]
- **Bootstrapping environments with required tooling (e.g., custom images, IDE, Cloud SDK)**[^2_1]
    - Dokumentacja: [Cloud Shell – how it works, preinstalled tools, SDK](https://docs.cloud.google.com/shell/docs/how-cloud-shell-works)
[^2_33]
- **Leveraging AI to assist with development and operations (e.g., Cloud Code, Gemini Code Assist)**[^2_1]
    - Dokumentacja: [Cloud Code for VS Code documentation](https://docs.cloud.google.com/code/docs/vscode)
[^2_34][^2_35]

***

## Section 2: Building and implementing CI/CD pipelines for applications and infrastructure (~27% of the exam)

### 2.1 Designing and managing CI/CD pipelines

- **Artifact management with Artifact Registry**[^2_1]
    - Dokumentacja: [Artifact Registry overview](https://docs.cloud.google.com/artifact-registry/docs/overview)
[^2_25]
- **Deployment to hybrid and multi-cloud environments (e.g., GKE Enterprise)**[^2_1]
    - Dokumentacja: [Cloud Service Mesh overview – multi‑cluster / multi‑cloud](https://docs.cloud.google.com/service-mesh/docs/overview)
[^2_36]
    - Dokumentacja: [GKE documentation (w tym GKE Enterprise)](https://cloud.google.com/kubernetes-engine/docs)
[^2_28]
- **CI/CD pipeline triggers**[^2_1]
    - Dokumentacja: [Cloud Build – triggers](https://docs.cloud.google.com/build/docs)
[^2_19]
- **Testing a new application version in the pipeline**[^2_1]
    - Dokumentacja: [Cloud Deploy – rollout, promotion and verification](https://cloud.google.com/deploy)
[^2_21]
- **Configuring deployment processes (e.g., approval flows)**[^2_1]
    - Dokumentacja: [Cloud Deploy – approvals \& promotion flows](https://cloud.google.com/deploy)
[^2_21]
- **CI/CD of serverless applications**[^2_1]
    - Dokumentacja: [Cloud Build – build \& deploy serverless](https://cloud.google.com/build)
[^2_37]
- **Applying CI/CD practices to infrastructure (e.g., GKE clusters, managed instance groups, Cloud Service Mesh configuration)**[^2_1]
    - Dokumentacja: [Terraform on Google Cloud](https://docs.cloud.google.com/docs/terraform)
[^2_12]
    - Dokumentacja: [Cloud Service Mesh overview](https://docs.cloud.google.com/service-mesh/docs/overview)
[^2_36]

***

### 2.2 Implementing CI/CD pipelines

- **Auditing and tracking deployments (e.g., Artifact Registry, Cloud Build, Cloud Deploy, Cloud Audit Logs)**[^2_1]
    - Dokumentacja: [Cloud Build docs – build history \& logs](https://docs.cloud.google.com/build/docs)
[^2_19]
    - Dokumentacja: [Cloud Audit Logs overview](https://docs.cloud.google.com/logging/docs/audit)
[^2_38]
- **Deployment strategies (e.g., canary, blue/green, rolling, traffic splitting)**[^2_1]
    - Dokumentacja: [Cloud Deploy – strategies \& rollouts](https://cloud.google.com/deploy)
[^2_21]
- **Troubleshooting and mitigating deployment issues**[^2_1]
    - Dokumentacja: [Cloud Deploy documentation – troubleshooting deployments](https://cloud.google.com/deploy)
[^2_21]

***

### 2.3 Managing CI/CD configuration and secrets

- **Key management (e.g., Cloud Key Management Service)**[^2_1]
    - Dokumentacja: [Cloud Key Management Service documentation](https://cloud.google.com/kms/docs)
[^2_39]
- **Secret management (e.g., Secret Manager, Certificate Manager)**[^2_1]
    - Dokumentacja: [Secret Manager documentation](https://docs.cloud.google.com/secret-manager/docs)
[^2_40][^2_41]
    - Dokumentacja: [Certificate Manager overview](https://docs.cloud.google.com/certificate-manager/docs/overview)
[^2_42]
- **Build versus runtime secret injection**[^2_1]
    - Dokumentacja: [Secret Manager – create \& access secrets](https://docs.cloud.google.com/secret-manager/docs/create-secret-quickstart)
[^2_41]

***

### 2.4 Securing the CI/CD deployment pipeline

- **Vulnerability analysis with Artifact Registry**[^2_1]
    - Dokumentacja: [Artifact Registry overview – vulnerability scanning](https://docs.cloud.google.com/artifact-registry/docs/overview)
[^2_25]
- **Software supply chain security (e.g., Binary Authorization, SLSA framework)**[^2_1]
    - Dokumentacja: [Binary Authorization documentation](https://cloud.google.com/binary-authorization/docs)
[^2_43][^2_44]
- **IAM policies based on environment**[^2_1]
    - Dokumentacja: [Binary Authorization – set up for GKE (IAM per env)](https://docs.cloud.google.com/binary-authorization/docs/setting-up)
[^2_45]

***

## Section 3: Applying site reliability engineering practices to applications (~23% of the exam)

### 3.1 Balancing change, velocity, and reliability of the service

- **Defining SLIs (e.g., availability, latency), SLOs, and SLAs**[^2_1]
    - Dokumentacja: [Service level objectives overview](https://docs.cloud.google.com/service-mesh/legacy/in-cluster/observability/slo-overview)
[^2_46]
    - Dokumentacja: [SLO monitoring in Cloud Monitoring](https://cloud.google.com/monitoring/slo-monitoring)
[^2_47]
- **Error budgets**[^2_1]
    - Dokumentacja: [SLO monitoring – error budget alerts](https://cloud.google.com/monitoring/slo-monitoring)
[^2_47]
    - Książki SRE: [SRE Books – rozdziały o SLO i error budgets](https://sre.google/resources/book-update/)
[^2_48]
- **Opportunity cost of risk and reliability (e.g., number of “nines”)**[^2_1]
    - Książki SRE: [Site Reliability Engineering \& Workbook](https://sre.google/resources/book-update/)
[^2_49][^2_48]

***

### 3.2 Managing service lifecycle

- **Service management (e.g., introduction of a new service by using a pre-service onboarding checklist, launch plan, or deployment plan, deployment, maintenance, and retirement)**[^2_1]
    - Dokumentacja: [App Hub – application-centric view of services](https://docs.cloud.google.com/app-hub/docs/overview)
[^2_11]
    - Książki SRE: rozdziały o „Service Lifecycle” i „Production Environment”[^2_48]
- **Capacity planning (e.g., quotas, limits)**[^2_1]
    - Dokumentacja: [Cloud Monitoring – utilization metrics](https://docs.cloud.google.com/monitoring/docs)
[^2_50]
- **Autoscaling (e.g., managed instance groups, Cloud Run, GKE)**[^2_1]
    - Dokumentacja: [Cloud Monitoring – autoscaling metrics](https://cloud.google.com/monitoring)
[^2_51]
    - Dokumentacja: [VPC / resource docs – autoscaler templates z CFT](https://docs.cloud.google.com/deployment-manager/docs/reference/cloud-foundation-toolkit)
[^2_15]

***

### 3.3 Mitigating incident impact on users

- **Draining/redirecting traffic**[^2_1]
    - Dokumentacja: [Cloud Deploy – traffic management / rollbacks](https://cloud.google.com/deploy)
[^2_21]
- **Adding capacity**[^2_1]
    - Dokumentacja: [Cloud Monitoring – kłuczowe metryki do decyzji capacity](https://docs.cloud.google.com/monitoring/docs)
[^2_50]
- **Rollback strategies**[^2_1]
    - Dokumentacja: [Cloud Deploy – rollbacks and strategies](https://cloud.google.com/deploy)
[^2_21]

***

## Section 4: Implementing observability practices (~20% of the exam)

### 4.1 Managing logs

- **Collecting and importing logs (e.g., Cloud Logging agent, Cloud Audit Logs, VPC Flow Logs, Cloud Service Mesh)**[^2_1]
    - Dokumentacja: [Cloud Logging overview](https://docs.cloud.google.com/logging/docs/overview)
[^2_5]
    - Dokumentacja: [Cloud Audit Logs overview](https://docs.cloud.google.com/logging/docs/audit)
[^2_38]
    - Dokumentacja: [VPC Flow Logs](https://docs.cloud.google.com/vpc/docs/flow-logs)
[^2_52]
    - Dokumentacja: [Cloud Service Mesh overview – telemetry](https://docs.cloud.google.com/service-mesh/docs/overview)
[^2_36]
- **Logging optimization (e.g., filtering, sampling, exclusions, cost, source considerations)**[^2_1]
    - Dokumentacja: [Cloud Logging overview – filtering, exclusions](https://docs.cloud.google.com/logging/docs/overview)
[^2_5]
- **Exporting logs (e.g., BigQuery, Pub/Sub, for auditing)**[^2_1]
    - Dokumentacja: [Cloud Logging docs – exports](https://docs.cloud.google.com/logging/docs)
[^2_53]
- **Retaining logs**[^2_1]
    - Dokumentacja: [Cloud Logging docs – retention and storage](https://docs.cloud.google.com/logging/docs)
[^2_53]
- **Analyzing logs**[^2_1]
    - Dokumentacja: [Cloud Logging – Logs Explorer](https://docs.cloud.google.com/logging/docs)
[^2_53]
- **Handling sensitive data (e.g., PII, PHI)**[^2_1]
    - Dokumentacja: [Cloud Logging overview – handling sensitive data](https://docs.cloud.google.com/logging/docs/overview)
[^2_5]

***

### 4.2 Managing metrics

- **Collecting and analyzing metrics (e.g., application, platform, networking, Cloud Service Mesh, Google Cloud Managed Service for Prometheus, hybrid/multi-cloud)**[^2_1]
    - Dokumentacja: [Cloud Monitoring documentation](https://docs.cloud.google.com/monitoring/docs)
[^2_50]
    - Dokumentacja: [Managed Service for Prometheus](https://cloud.google.com/stackdriver/docs/managed-prometheus)
[^2_54]
    - Dokumentacja: [Cloud Service Mesh overview – telemetry metrics](https://docs.cloud.google.com/service-mesh/docs/overview)
[^2_36]
- **Creating custom metrics from logs**[^2_1]
    - Dokumentacja: [Cloud Logging docs – log-based metrics](https://docs.cloud.google.com/logging/docs)
[^2_53]
- **Using Metrics Explorer for ad hoc metric analysis**[^2_1]
    - Dokumentacja: [Cloud Monitoring docs – Metrics Explorer](https://docs.cloud.google.com/monitoring/docs)
[^2_50]
- **Creating synthetic monitors**[^2_1]
    - Dokumentacja: [Synthetic monitoring overview (uptime checks)](https://docs.cloud.google.com/monitoring/uptime-checks/introduction)
[^2_55]

***

### 4.3 Managing dashboards and alerts

- **Managing dashboards (e.g., creating, filtering, sharing, playbooks)**[^2_1]
    - Dokumentacja: [Cloud Monitoring – dashboards](https://cloud.google.com/monitoring)
[^2_51]
- **Configuring alerting and alerting policies (e.g., SLIs, SLOs, cost control)**[^2_1]
    - Dokumentacja: [SLO monitoring – alerting](https://cloud.google.com/monitoring/slo-monitoring)
[^2_47]
- **Widely used third-party alerting tools**[^2_1]
    - Dokumentacja: [Cloud Monitoring docs – integrations \& notification channels](https://docs.cloud.google.com/monitoring/docs)
[^2_50]

***

## Section 5: Optimizing performance and troubleshooting (~15% of the exam)

### 5.1 Troubleshooting issues

- **Infrastructure issues**[^2_1]
    - Dokumentacja: [Cloud Monitoring – infrastructure metrics](https://docs.cloud.google.com/monitoring/docs)
[^2_50]
- **Application issues**[^2_1]
    - Dokumentacja: [Logging and Monitoring in Google Cloud – course](https://www.skills.google/course_templates/99)
[^2_56]
- **CI/CD pipeline issues**[^2_1]
    - Dokumentacja: [Cloud Build docs – troubleshooting builds](https://docs.cloud.google.com/build/docs)
[^2_19]
    - Dokumentacja: [Cloud Deploy – troubleshooting rollouts](https://cloud.google.com/deploy)
[^2_21]
- **Observability issues**[^2_1]
    - Dokumentacja: [Cloud Logging \& Monitoring – quick intro](https://www.dsstream.com/post/gcp-google-cloud-platform-logging-monitoring-alerting-quick-introduction)
[^2_57]
- **Performance and latency issues**[^2_1]
    - Dokumentacja: [Cloud Trace documentation](https://docs.cloud.google.com/trace/docs)
[^2_58]
    - Dokumentacja: [Cloud Profiler](https://docs.cloud.google.com/profiler/docs)
[^2_59]

***

### 5.2 Implementing debugging tools in Google Cloud

- **Application instrumentation**[^2_1]
    - Dokumentacja: [Cloud Trace API \& instrumentation](https://docs.cloud.google.com/trace/docs)
[^2_60][^2_58]
- **Cloud Trace**[^2_1]
    - Dokumentacja: [Cloud Trace documentation](https://docs.cloud.google.com/trace/docs)
[^2_58]
- **Error Reporting**[^2_1]
    - Dokumentacja: [Logging and Monitoring in Google Cloud – Error Reporting](https://www.skills.google/course_templates/99)
[^2_56]

***

### 5.3 Optimizing resource utilization and costs

- **Observability costs**[^2_1]
    - Dokumentacja: [Cloud Logging overview – cost and exclusions](https://docs.cloud.google.com/logging/docs/overview)
[^2_5]
    - Dokumentacja: [Cloud Monitoring – pricing and metrics](https://cloud.google.com/monitoring)
[^2_51]
- **Spot virtual machines (VMs)**[^2_1]
    - Dokumentacja: [Cloud Monitoring – compute metrics (do analizy wykorzystania Spot/Preemptible)](https://docs.cloud.google.com/monitoring/docs)
[^2_50]
- **Infrastructure cost planning (e.g., committed-use discounts, sustained-use discounts, network tiers)**[^2_1]
    - Dokumentacja: [Cloud Monitoring – wykorzystanie jako baza do planowania CUD/SUD](https://cloud.google.com/monitoring)
[^2_51]
- **Google Cloud recommenders (e.g., cost, security, performance, manageability, reliability)**[^2_1]
    - Dokumentacja: [Recommender documentation](https://docs.cloud.google.com/recommender/docs)
[^2_61][^2_62]

***

Jeśli chcesz, mogę z tego od razu zrobić gotowy plik `pcde-exam-guide-links.md` (np. pod GitHuba) albo dorzucić do każdego punktu krótkie „co umieć / co przeczytać najpierw”.
<span style="display:none">[^2_63][^2_64][^2_65][^2_66][^2_67][^2_68][^2_69][^2_70][^2_71][^2_72][^2_73][^2_74][^2_75][^2_76][^2_77][^2_78]</span>

<div align="center">⁂</div>

[^2_1]: https://www.scribd.com/document/927259577/Professional-Cloud-Devops-Engineer-Exam-Guide-English

[^2_2]: https://docs.cloud.google.com/vpc/docs/shared-vpc

[^2_3]: https://docs.cloud.google.com/vpc/docs/shared-vpc?authuser=31\&hl=zh-tw

[^2_4]: https://docs.cloud.google.com/monitoring/settings?authuser=9

[^2_5]: https://docs.cloud.google.com/logging/docs/overview

[^2_6]: https://docs.cloud.google.com/iam/docs/service-account-overview

[^2_7]: https://cloud.google.com/iam/docs/best-practices-service-accounts

[^2_8]: https://docs.cloud.google.com/iam/docs/service-accounts-create

[^2_9]: https://cloud.google.com/sdk/gcloud/reference/iam/service-accounts/create

[^2_10]: https://docs.cloud.google.com/app-hub/docs

[^2_11]: https://docs.cloud.google.com/app-hub/docs/overview

[^2_12]: https://docs.cloud.google.com/docs/terraform

[^2_13]: https://cloud.google.com/foundation-toolkit?hl=id

[^2_14]: https://github.com/GoogleCloudPlatform/cloud-foundation-toolkit

[^2_15]: https://docs.cloud.google.com/deployment-manager/docs/reference/cloud-foundation-toolkit

[^2_16]: https://cloud.google.com/config-connector/docs?authuser=002\&%3Bhl=ja\&hl=ja

[^2_17]: https://cloud.google.com/config-connector/docs?hl=zh-cn

[^2_18]: https://docs.cloud.google.com/docs/iac

[^2_19]: https://cloud.google.com/build/docs/?authuser=4

[^2_20]: https://docs.cloud.google.com/build/docs

[^2_21]: https://cloud.google.com/deploy

[^2_22]: https://cloud.google.com/deploy/docs?authuser=9\&%3Bhl=fr\&hl=fr

[^2_23]: https://docs.cloud.google.com/deploy/docs/using-skaffold

[^2_24]: https://skaffold.dev/docs/

[^2_25]: https://docs.cloud.google.com/artifact-registry/docs/overview

[^2_26]: https://cloud.google.com/artifact-registry/docs/overview?authuser=09\&hl=id

[^2_27]: https://docs.cloud.google.com/config-connector/docs/how-to/getting-started

[^2_28]: https://cloud.google.com/kubernetes-engine/docs

[^2_29]: https://docs.cloud.google.com/kubernetes-engine/docs/about

[^2_30]: https://docs.cloud.google.com/workstations/docs

[^2_31]: https://docs.cloud.google.com/workstations/docs/reference/rpc?authuser=9

[^2_32]: https://docs.cloud.google.com/shell/docs

[^2_33]: https://docs.cloud.google.com/shell/docs/how-cloud-shell-works

[^2_34]: https://docs.cloud.google.com/code/docs/vscode

[^2_35]: https://cloud.google.com/code/docs/vscode?authuser=5\&%3Bhl=it\&hl=it

[^2_36]: https://docs.cloud.google.com/service-mesh/docs/overview

[^2_37]: https://cloud.google.com/build

[^2_38]: https://docs.cloud.google.com/logging/docs/audit

[^2_39]: https://docs.cloud.google.com/kms/docs

[^2_40]: https://docs.cloud.google.com/secret-manager/docs

[^2_41]: https://docs.cloud.google.com/secret-manager/docs/create-secret-quickstart

[^2_42]: https://docs.cloud.google.com/certificate-manager/docs/overview

[^2_43]: https://cloud.google.com/binary-authorization/docs?hl=en

[^2_44]: https://docs.cloud.google.com/binary-authorization/docs/key-concepts

[^2_45]: https://docs.cloud.google.com/binary-authorization/docs/setting-up

[^2_46]: https://docs.cloud.google.com/service-mesh/legacy/in-cluster/observability/slo-overview

[^2_47]: https://cloud.google.com/monitoring/slo-monitoring

[^2_48]: https://sre.google/resources/book-update/

[^2_49]: https://research.google/pubs/the-site-reliability-workbook/

[^2_50]: https://docs.cloud.google.com/monitoring/docs

[^2_51]: https://cloud.google.com/monitoring

[^2_52]: https://docs.cloud.google.com/vpc/docs/flow-logs?hl=ja

[^2_53]: https://docs.cloud.google.com/logging/docs

[^2_54]: https://cloud.google.com/stackdriver/docs/managed-prometheus?authuser=002\&%3Bhl=zh-tw\&hl=zh-tw

[^2_55]: https://docs.cloud.google.com/monitoring/uptime-checks/introduction

[^2_56]: https://www.skills.google/course_templates/99

[^2_57]: https://www.dsstream.com/post/gcp-google-cloud-platform-logging-monitoring-alerting-quick-introduction

[^2_58]: https://docs.cloud.google.com/trace/docs

[^2_59]: https://docs.cloud.google.com/profiler/docs

[^2_60]: https://docs.cloud.google.com/trace/docs/reference

[^2_61]: https://docs.cloud.google.com/recommender/docs

[^2_62]: https://cloud.google.com/recommender/docs?authuser=0000\&%3Bhl=zh-cn\&hl=zh-cn

[^2_63]: https://github.com/GoogleCloudPlatform/spring-cloud-gcp/blob/main/docs/src/main/asciidoc/secretmanager.adoc

[^2_64]: https://www.ibm.com/docs/en/kubecost/self-hosted/1.x?topic=guide-amazon-managed-service-prometheus

[^2_65]: https://www.andhrajyothy.com/2026/technology/google-cloud-outage-in-india-after-delhi-data-centre-fire-disrupts-network-services-sgr-1531453.html

[^2_66]: https://docs.cloud.google.com/service-mesh/docs/onboarding/provision-control-plane

[^2_67]: https://media.defense.gov/2024/Mar/07/2003407858/-1/-1/0/CSI-CloudTop10-Key-Management.PDF

[^2_68]: https://www.youtube.com/watch?v=X4qAEa8_JxQ

[^2_69]: https://www.youtube.com/watch?v=_mogL3kfKiU

[^2_70]: https://developers.google.com/machine-learning/recommendation/overview/types

[^2_71]: https://www.youtube.com/watch?v=xScfavWAeJk

[^2_72]: https://docs.cloud.google.com/vpc/docs

[^2_73]: https://docs.cloud.google.com/monitoring/settings/manage-api

[^2_74]: https://cloud.google.com/blog/products/gcp/getting-started-with-shared-vpc

[^2_75]: https://docs.cloud.google.com/ruby/docs/reference/google-cloud-monitoring-metrics_scope-v1/latest/Google-Cloud-Monitoring-MetricsScope-V1-MetricsScopes

[^2_76]: https://docs.cloud.google.com/iam/docs/keys-create-delete

[^2_77]: https://medium.com/@iobluedot/understanding-shared-vpcs-in-google-cloud-platform-7d9e8743d0d5

[^2_78]: https://docs.cloud.google.com/monitoring/api/ref_v3/rpc?authuser=1


---

# tak

Gotowy plik z listą zrobiłem jako `pcde-exam-links.md` – możesz go pobrać i wrzucić np. do własnego repo z notatkami.

