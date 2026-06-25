<img src="https://r2cdn.perplexity.ai/pplx-full-logo-primary-dark%402x.png" style="height:64px;margin-right:32px"/>

# Stworz teraz taka liste regul. Na zasadzie jak na egzaminie pokaze sie jakas fraza to najprowdopobna odpowiedzia bedzie cos.

Przykład
Kiedy w pytaniu o wdrożenia pada fraza "instantly roll back" (natychmiastowe wycofanie), Twoim pierwszym skojarzeniem w GCP powinno być Blue/Green Deployment.

Poniżej masz **listę skrótowych „reguł skojarzeń”** pod egzamin DevOps — idealnie do wydrukowania/zakładki w notatkach. Fraza z pytania → najbardziej prawdopodobny kierunek odpowiedzi w GCP.

***

## Deployment / release

- **“instantly roll back”** → Blue/Green deployment.
- **“switch traffic back quickly”** → Blue/Green deployment.
- **“zero downtime rollback”** → Blue/Green deployment.
- **“gradual traffic increase”**, **“ramp up traffic”**, **“test with small subset of users”** → Canary deployment.
- **“test real production traffic while minimizing impact”** → Canary deployment.
- **“approvals in deployment pipeline”**, **“release requires approval”** → Cloud Deploy (CD), ewentualnie Spinnaker jeśli pojawia się w treści.
- **“multi-environment deployment (dev → staging → prod) with approvals”** → Cloud Deploy.
- **“tagged revision in Cloud Run not serving traffic”**, **“deploy new revision without receiving traffic”** → `gcloud run deploy --no-traffic --tag …` (Cloud Run canary/staged).

***

## CI/CD, artefakty, supply chain

- **“build images on code push”**, **“run tests automatically on commit/push”** → Cloud Build trigger (push to branch / PR).
- **“central build service”**, **“serverless build pipeline”** → Cloud Build.
- **“store container images with native IAM and VPC Service Controls”** → Artifact Registry (nie GCR).
- **“store Helm charts (public + private) with uniform management and VPC Service Controls”** → Artifact Registry OCI.
- **“only images from trusted pipeline may run in production”** → Binary Authorization.
- **“sign / attest images before deployment”** → Binary Authorization + attestation via Cloud KMS keys.
- **“scan images for vulnerabilities / CVEs”** → Artifact Analysis / Container Analysis in Artifact Registry.
- **“Terraform in CI/CD, avoid duplicate stacks”** → Terraform remote state in Cloud Storage (gcs backend).

***

## GKE / Kubernetes

- **“scale automatically based on traffic / CPU”** → Horizontal Pod Autoscaler (HPA).
- **“scale nodes automatically as demand changes”** → Cluster Autoscaler (node pool autoscaling).
- **“both pods and nodes should scale”** → HPA + Cluster Autoscaler razem.
- **“issue in one microservice, backlog of messages, more throughput needed”** → increase number of Pod replicas (scale Deployment).
- **“global view of Prometheus metrics across many clusters”** → Google Cloud Managed Service for Prometheus.
- **“enforce policies across all GKE clusters”**, **“ensure network policies/logging DaemonSet everywhere”** → Anthos Config Management / Policy Controller / Config Sync (GitOps).
- **“blue/green deployment in GKE, need rollback actions”** → update Service selector to point back to previous Deployment (np. `app=my-app,version=blue`).

***

## Compute Engine / MIG

- **“single VM keeps crashing, reduce manual recreations”** → Managed Instance Group (MIG) with health checks.
- **“business-critical workload, fixed resources for months, lower cost without performance impact”** → Committed Use Discounts (nie Spot/Preemptible).
- **“autoscale across regions with many resources per instance”** → Managed Instance Groups + validate quotas per region.

***

## Observability: logs, metrics, traces

- **“create metric from logs”**, **“visualize how often something appears in logs”** → Log-based metric in Cloud Logging + dashboard in Cloud Monitoring.
- **“visualize cache misses over time from logs”** → Log-based metric + dashboard (Cloud Monitoring).
- **“centralize logs from all projects in folder/organization”** → aggregated log sink at folder/org level.
- **“export all logs and keep for 7 years, avoid loss due to misconfiguration”** → Cloud Logging aggregated sink → Cloud Storage bucket with Bucket Lock + 7‑year retention.
- **“retain logs for 365 days and let client import logs”** → logs bucket + sink in Cloud Logging (retention 365 dni), klient ma dostęp do bucket.
- **“IP address-level visibility of requests hitting API”** → VPC Flow Logs (na subnet), potem analiza w Cloud Logging / BigQuery.
- **“build interactive dashboard from VM utilization logs, updated in near real time”** → Cloud Logging → BigQuery → Data Studio (Looker/Data Studio).
- **“monitor resource utilization (CPU, memory) of Cloud Run service”** → Cloud Monitoring metrics for Cloud Run (container CPU/memory).
- **“collect system logs/metrics from all current and future Compute Engine VMs”** → Ops Agent + Agent Policy (nie ręczna instalacja per VM).

***

## Observability: APM (performance, profiling, dependencies)

- **“suspect downstream services causing latency”**, **“investigate why requests take longer”** → Cloud Trace (distributed tracing).
- **“investigate CPU and memory usage patterns over time in production”** → Cloud Profiler.
- **“heap/CPU profile to find performance hotspot”** → Cloud Profiler.

***

## Networking / load balancing

- **“UK-only users, deployed in single region, most cost-effective network tier”** → Standard Tier + regional external HTTPS load balancer.
- **“global users, low latency worldwide”** → Premium Tier + global external HTTPS load balancer.
- **“private connectivity to Google APIs/services from VPC”** → Private Service Connect.

***

## Logs, audit, security

- **“read-only access to Data Access audit logs, least privilege”** → `roles/logging.privateLogViewer` for group (nie indywidualne `owner`).
- **“centralize security logs for production folder and send to SIEM / analysis pipeline”** → aggregated log sink na folder produkcyjny → Pub/Sub topic / Logging bucket.

***

## Secrets, keys, service accounts

- **“securely store API key for Cloud Run / Cloud Functions / GKE”** → Secret Manager (secret as env var/mounted secret).
- **“avoid storing secrets at rest insecurely in CI/CD pipeline”** → Secret Manager + Cloud KMS, Workload Identity.
- **“organization policy iam.disableServiceAccountKeyCreation is enforced, still need key for third-party app”** → project-level override policy dla konkretnego projektu (nie wyłączanie na całej organizacji).

***

## IAM, scoping, monitoring workspaces

- **“Cloud Monitoring dashboard should only show metrics for projects in one folder”** → scoping project / workspace per folder (new scoping project for each folder).
- **“security team needs read-only access to logs bucket Required”** → group + `roles/logging.privateLogViewer` na bucket/produkcję.
- **“share Cloud Monitoring dashboard with partner team”** → share dashboard URL (link) – oni mogą stworzyć kopię.

***

## SRE: SLI/SLO/error budget, incidents

- **“detect consumption of error budget and protect customers”** → SLO + alert policy on `select_slo_burn_rate`.
- **“postmortem required when…”** → triggers: data loss / external stakeholder request / severe incident; odpowiedzi często: „data lost” + „external stakeholder asks”.
- **“reduce toil”** → automate repetitive tasks (skrypt, pipeline, tooling), nie zatrudnianie kolejnych ludzi.
- **“semi-annual capacity planning, want resilience but avoid overprovisioning”** → load tests + autoscaling (HPA/cluster autoscaler), nie ręczne dodanie 60% capacity w ciemno.
- **“incident: many services affected, you’re IC, OL, CL assigned – what next?”** → establish communication channel dla responders.

***

## Deployment patterns / testing strategies

- **“reduce complexity of deployments and minimize rollback duration”** → Blue/Green + Canary testing.
- **“test new version with shadow traffic not impacting users”** → shadow / mirrored traffic (czasem Cloud Run tag + no-traffic + manual tests).
- **“fully automate builds \& tests for trunk-based development”** → Cloud Build triggers na push, unit tests → integration/acceptance tests w pipeline przed produkcją.

***

Jeśli chcesz, mogę to teraz:

- zapisać do pliku tekstowego w dokładnie takim formacie,
- albo rozszerzyć o **mini‑przykłady pytań** (po 1–2 dla każdej reguły) w stylu examtopics.
<span style="display:none">[^1][^10][^2][^3][^4][^5][^6][^7][^8][^9]</span>

<div align="center">⁂</div>

[^1]: https://services.google.com/fh/files/misc/professional_cloud_devops_engineer_exam_guide_english.pdf

[^2]: https://www.youtube.com/watch?v=sCShgNLb958

[^3]: https://medium.com/google-cloud/how-to-pass-the-google-professional-cloud-devops-exam-fc8754af0203

[^4]: https://docs.cloud.google.com/architecture/blueprints/security-foundations/operation-best-practices

[^5]: https://medium.com/google-cloud/professional-cloud-devops-engineer-exam-preparations-step-by-step-guide-7441ee6327bd

[^6]: https://www.cloudbabble.co.uk/2025-12-05-Google-Cloud-Professional-DevOps-Engineer-Exam-Guide/

[^7]: https://www.linkedin.com/pulse/how-pass-google-professional-cloud-devops-engineer-tips-saurabh-singh

[^8]: https://www.youtube.com/watch?v=RZQvhQr6qiQ

[^9]: https://www.youtube.com/watch?v=dJedcxwJ7VQ

[^10]: https://medium.com/@bigface00/mastering-google-cloud-devops-insights-and-tips-for-the-professional-cloud-devops-engineer-exam-738825127d73

