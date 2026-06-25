## Organization and IAM

Te tematy prawie zawsze pojawiają się w kontekście **least privilege**, scoping projectów, folderów i automatycznych rekomendacji kosztowych / wydajnościowych.[^3][^1]

- **Google Cloud Recommender (Google Cloud recommenders)**
    - Służy do proponowania zmian pod kątem kosztów, bezpieczeństwa, wydajności (np. zmiana machine type, IAM, nieużywane IP).[^3]
    - Używaj, gdy pytanie mówi o „using recommendations” albo „optimize cost/performance using Google‑recommended insights” – **nie** myl z Active Assist (Active Assist to parasolowy termin, a Recommender to konkretne API/feature).[^4][^5]
    - Jeśli odpowiedź mówi o ręcznym przeglądaniu dashboardów przez człowieka zamiast automatycznych rekomendacji, zwykle jest gorsza niż wariant z Recommender API.
- **Identity and Access Management (IAM)**
    - Kontrola dostępu na poziomie organizacji/folderu/projektu; na egzaminie pojawia się często przy logach, Cloud Build, Terraform, Ops Agent, service accounts.[^1]
    - Zwracaj uwagę na **predefined roles** (np. `logging.logWriter`, `monitoring.metricWriter`, `roles/logging.privateLogViewer`) zamiast szerokich ról typu `owner` – te szerokie role są anty‑wzorcem w pytaniach.[^1][^3]
    - Kiedy pytanie mówi o JSON keys dla service accounts, Google‑recommended solution to zwykle **Workload Identity / brak kluczy** albo polityka `iam.disableServiceAccountKeyCreation`, nie ręczne generowanie kluczy.[^3][^1]

***

## Networking and access

Większość pytań dotyczy redukcji kosztów, kierowania ruchu w obrębie regionu, prywatnej komunikacji z usługami Google oraz agregacji logów sieciowych.[^1][^3]

- **Cloud CDN**
    - Służy do cache’owania treści HTTP blisko użytkownika na edge, obniża latency przy globalnym ruchu.[^3]
    - Używaj, gdy pytanie mówi o **global users, static content, caching**, nie gdy masz tylko UK‑based użytkowników i regionalny load balancer – tam prawidłowa odpowiedź będzie zwykle „Standard Tier, regional LB bez CDN”.[^1]
- **Cloud Load Balancing**
    - Obejmuje globalne/regionalne load‑balancery HTTPS/L7, TCP/UDP, internal/external; w pytaniach liczy się wybór **global vs regional** i **Premium vs Standard tier**.[^3][^1]
    - Dla ruchu tylko z UK do regionu `europe-west2` egzamin będzie preferował **Standard Tier + regional external HTTPS LB** jako najbardziej kosztowo efektywny wariant.[^1]
    - Nie wybieraj globalnego LB + Premium, jeśli ruch jest wyraźnie lokalny i nie ma potrzeby global anycast.
- **Private Service Connect**
    - Prywatne połączenie z usługami Google/partnerów z własnej VPC, używane przy wymaganiach compliance, izolacji sieci.[^3]
    - Na egzaminie pojawia się jako opcja przy prywatnym dostępie do BigQuery/Cloud Storage itd.; **nie** myl z VPC Peering (peering jest między VPC, PSC jest do managed services).[^4][^3]
- **Shared VPC**
    - Host i service projekty; centralny networking, rozdział odpowiedzialności między zespołami.[^3]
    - W pytaniach: gdy chcesz centralne logowanie/monitoring i wspólne VPC dla wielu projektów, wybieraj Shared VPC zamiast powielania konfiguracji w każdym projekcie.[^1]
- **VPC Flow Logs**
    - Logi na poziomie subnetu; dają wgląd w ruch i są bazą np. pod przeliczanie IP trafiających do API.[^6][^1]
    - Użyj, gdy chcesz zliczyć IP odwiedzające custom HTTP servera na Compute Engine najprostszym sposobem – odpowiedź typu „włącz VPC Flow Logs na subnetcie” jest częściej poprawna niż Packet Mirroring czy skomplikowane skrypty.[^1]
- **VPC Network Peering**
    - Prywatna komunikacja między VPC w obrębie lub między projektami; **nie** wspiera transitive routing.[^3]
    - Gdy pytanie jest o komunikację klastrów GKE w różnych VPC i diagnozowanie connectivity, exam raczej kieruje w stronę **Network Connectivity Center + Connectivity Tests**, a nie ręczne grzebanie w peeringu, ale pojęcie peeringu musisz znać.[^6][^1]

***

## Infrastructure as code

Egzamin mocno akcentuje **Terraform**, **Config Connector**, **Anthos Config Management** i wzorce GitOps/Config Sync.[^1][^3]

- **Anthos Config Management**
    - GitOps dla GKE/Anthos – synchronizuje polityki, manifests z repo do klastrów; typowo używany z **Policy Controller** (ConstraintTemplates).[^3][^1]
    - W pytaniach o „enforce constraints, auto‑apply when GitHub changes” poprawną odpowiedzią jest zwykle **Anthos Config Management z repo jako źródłem**, nie własne webhooks/Cloud Build skrypty.[^1]
- **Cloud Foundation Toolkit**
    - Zestaw blueprintów IaC (Terraform, Deployment Manager) dla referencyjnych architektur; exam może to wspominać jako „Google‑recommended blueprints”.[^4][^3]
    - Nie jest narzędziem runtime, raczej gotowymi przykładami – nie wybieraj go jako mechanizmu do wykonywania deploymentu.
- **Config Connector**
    - Kubernetes operator, który zarządza zasobami GCP jako CRD w GKE – idealny przy GitOps dla infrastruktury (np. tworzenie Cloud SQL, Storage z manifestów).[^3]
    - Gdy pytanie mówi „GKE + GitOps + infra must reconcile periodically”, poprawna odpowiedź to zwykle **Config Connector** zamiast Cloud Build z Terraform image.[^1]
- **GitOps (jako wzorzec)**
    - Egzamin traktuje GitOps jako „source of truth in Git, reconciled przez narzędzia typu Config Sync/Anthos Config Management/Config Connector”.[^1]
    - Uważaj na odpowiedzi, które wymagają ręcznego `kubectl apply` z laptopa – to **nie** jest GitOps.
- **Helm**
    - Package manager dla Kubernetes; w pytaniach pojawia się przy zarządzaniu **public + private charts** z wymaganiami security/VPC Service Controls.[^1]
    - Gdy odpowiedź mówi o „store Helm charts in Artifact Registry in OCI format” – to jest Google‑recommended approach dla uniform access control; lepsze niż własny Helm repo serwer czy Cloud Storage bucket z HTTP.[^3][^1]
- **Infrastructure Manager**
    - Managed usługa do zarządzania IaC (Deployment Manager successor); może być wspomniana w exam guide jako jeden z tooli.[^4][^3]
    - Egzaminquestions jednak bardziej skupiają się na **Terraform + Cloud Build + state in Cloud Storage (gcs backend)** – pamiętaj, że brak praw do GCS (`storage.objectAdmin`) dla Cloud Build psuje `terraform init/apply`.[^1]
- **Terraform**
    - Główne IaC narzędzie w pytaniach; kluczowe rzeczy: **remote state w Cloud Storage**, unikanie duplikowania stacków, lifecycle `create_before_destroy`, integracja z CI/CD (Cloud Build, Jenkins na GCE).[^1]
    - Nie używaj lokalnego state ani kopiowania state do Git – egzamin mocno preferuje backend `gcs` oraz odpowiednie IAM dla service account Cloud Build/Jenkins.[^1]

***

## CI/CD and artifacts

Tutaj pojawia się najwięcej pytań o poprawny wybór narzędzia w pipeline: build vs deploy vs artifact store.[^3][^1]

- **Artifact Registry**
    - Nowsze, zalecane repozytorium kontenerów, pakietów (w tym OCI Helm charts) z integracją security (Container Analysis, CVE scanning, VPC Service Controls).[^3]
    - W pytaniach: gdy security team chce „store public + private Helm charts with native access control and VPC Service Controls”, poprawna odpowiedź to **Artifact Registry**; nie Git repo, nie custom Helm repo na GKE.[^1]
- **Cloud Build**
    - Managed build system; typowo: budowa i testy, integracja z Artifact Registry/Container Registry, trigger na push/PR w GitHub, wykonywanie Terraform.[^3][^1]
    - Egzamin lubi scenariusze z **branch protection + Cloud Build trigger na push to main + approval na trigger** (change control) oraz użycie Cloud Build do uruchomienia testów przed deployem.[^1]
    - Jeśli pytanie opisuje manualne buildy na dev maszynie, to jest anty‑wzorzec; wybieraj Cloud Build + trigger.
- **Cloud Deploy**
    - Managed continuous delivery do GKE/Anthos; odpowiada za rollouty pomiędzy environmentami (dev/stage/prod), approvals, release tracks.[^3]
    - Pytania: „reduce toil in end‑to‑end deployment, automate promotion approvals” – to sygnał, żeby użyć Cloud Deploy z automatycznymi approval steps, nie własne skrypty.[^1]
- **Container Registry**
    - Starsze repo obrazów; w nowych pytaniach częściej pojawia się Artifact Registry, ale w examtopics nadal widać Cloud Build push to GCR.[^3][^1]
    - Zapamiętaj: gdy pytanie mówi o automatycznym deploy po update obrazu, pipeline bywa: **GCR + Pub/Sub trigger + Spinnaker/GKE deploy**; nie ręczne polecenie `kubectl`.[^1]

***

## Compute and runtimes

Egzamin uwielbia porównywać **App Engine, Cloud Functions, Cloud Run, Compute Engine, GKE** w kontekście skalowania, kontroli, kosztów i SRE praktyk.[^3][^1]

- **App Engine**
    - PaaS dla web/app; w pytaniach występuje przy metrykach połączeń (`flex_instance_connections_current`), profilowaniu IoT aplikacji, autoscailingu.[^1]
    - Nie wybieraj App Engine, gdy wymagana jest pełna kontrola nad OS, custom DaemonSet, czy złożony mesh – wtedy lepszy jest GKE/Compute Engine.
- **Cloud Functions**
    - Event‑driven FaaS; pojawia się jako trigger dla GCS (`google.storage.object.finalize`) skalujący MIG, albo w pipeline do przetwarzania batchowych danych.[^3][^1]
    - Uważaj: przy compute‑heavy batchach zwykle lepsze jest **Compute Engine MIG z pre‑loaded image** niż Cloud Functions o maksymalnym CPU – exam podkreśla optymalizację kosztów.[^1]
- **Cloud Run**
    - Serverless kontenery; pytania: canary/staged rollout z tagami (`--no-traffic`, `--tag`) i split traffic, resource utilization (CPU/memory metrics w Cloud Monitoring), secure access do API key przez Secret Manager.[^3][^1]
    - Nie wybieraj Cloud Run, gdy konieczna jest kontrola nad worker nodem, DaemonSet, emptyDir/ephemeral storage – to domena GKE.
- **Compute Engine**
    - VM; w exam typowe motywy: MIG, autoscaler, Ops Agent, dobór machine type na podstawie Recommender i historycznych metryk.[^3][^1]
    - Pułapka: ręczne przeglądanie dashboardów zamiast użycia **Recommender API** do dobrania machine type; oraz używanie JSON key zamiast przypisania odpowiednich IAM ról do instance service account (least privilege).[^1]
- **GKE (Google Kubernetes Engine)**
    - Managed Kubernetes; masowo obecny w pytaniach: HPA + cluster autoscaler, blue/green, canary, Istio/Anthos Service Mesh, Config Sync, Binary Authorization.[^3][^1]
    - Egzamin preferuje **Horizontal Pod Autoscaler + cluster autoscaler** do dynamicznego loadu zamiast statycznej liczby Podów/nodów.[^1]
- **Managed Instance Group / Managed Instance Groups**
    - Grupy VM z jednolitą konfiguracją, autoscaling, rollout; wybierane gdy service „needs to automatically scale using MIG and across multiple regions”.[^3][^1]
    - Pamiętaj o **quota w każdym regionie** – dobra odpowiedź to często „validate resource requirements against per‑region project quotas”.[^1]

***

## Developer environments

Tu pytania są bardziej w exam guide niż w samych examtopics, ale warto rozumieć różnice.[^4][^3]

- **Cloud SDK**
    - Narzędzia CLI (gcloud, gsutil, bq); w pytaniach pojawia się do instalacji Ops Agent, tworzenia Agent Policy, sterowania Cloud Build/Deploy.[^3][^1]
    - Nie jest środowiskiem uruchomieniowym, więc nie wybieraj go jako host dla aplikacji.
- **Cloud Shell**
    - Zarządzana powłoka z preinstalowanym SDK; dobra do okazjonalnej administracji i demosów.[^3]
    - Egzamin raczej nie każe Ci wybierać Cloud Shell w rozwiązaniach produkcyjnych; jeśli odpowiedź mówi „log in to Cloud Shell and run commands by hand”, to zwykle anty‑wzorzec względem automatyzacji.
- **Cloud Workstations**
    - Managed dev środowiska (IDE + narzędzia) w chmurze.[^4][^3]
    - Exam może wspominać przy „secure cloud development environments”, ale nie jest kluczowy w pytaniach o operacje produkcyjne/SRE.

***

## Observability and SRE tools

To najważniejsza grupa dla DevOps egzaminu – pytania o logi, metryki, trace, profilowanie, error budget, bucket lock, sinks, burn rate.[^5][^1]

- **Cloud Audit Logs**
    - Logi administracyjne i dostępu do danych – krytyczne przy IAM, security, compliance.[^6]
    - Pytania: centralizacja audit logs z folderów/projektów, dostęp `privateLogViewer`, eksport do Storage/BigQuery; pamiętaj o **aggregated sinks na folder/organization level** dla przyszłych projektów.[^1]
- **Cloud Logging (Stackdriver Logging)**
    - Centralne logi aplikacyjne/systemowe, filtry, log‑based metrics, buckets, sinks.[^5]
    - Egzamin: tworzenie **log‑based metrics** do wizualizacji cache missów, ekskluzje (np. DEBUG k8scontainer), retencja 365 dni dla klienta bez zmian w kodzie (logs bucket + sink).[^1]
    - Nie wybieraj zmiany w kodzie / wysyłania logów do zewnętrznej usługi, jeśli można użyć **Cloud Logging sink do Storage/Pub/Sub**.
- **Cloud Monitoring (Stackdriver Monitoring)**
    - Metryki, dashboards, SLO/SLI, alert policies, uptime checks.[^5]
    - Egzamin: error budget burn rate (`select_slo_burn_rate`), scoping projects (monitoring workspace / scoping project), dzielenie dashboardu przez URL, custom metrics z Ops Agent i aplikacji.[^1]
    - Pułapka: zamiast tworzyć osobne workspaces per project, Google‑recommended jest scoping project/workspace obejmujące wiele projektów z odpowiednimi rolami IAM.
- **Cloud Profiler (Stackdriver Profiler)**
    - Ciągłe profilowanie CPU/heap dla app w produkcji; idealne do znajdowania memory leaków (heap rośnie, potem restart) i gorących ścieżek.[^7]
    - Egzamin: przy Go/Java aplikacji, która restartuje po 15 minutach, rosnący heap → poprawna akcja: **podnieść memory limit w deploymentcie** na czas fixu, a Profiler służy do identyfikacji problemu.[^1]
- **Cloud Service Mesh**
    - Service mesh (Istio‑like) managed przez Google; examquestions często używają **Anthos Service Mesh** nazwę przy GKE/Compute Engine, traffic splitting po nagłówkach (user‑agent).[^1]
    - Nie myl z Cloud Load Balancing – traffic routing na L7 w mesh vs global LB na edge.
- **Cloud Trace (Stackdriver Trace)**
    - Distributed tracing, latencja requestów, analiza ścieżek; ważne przy debugowaniu „downstream dependency slow”.[^5]
    - Egzamin: gdy performance spadł po release i podejrzewasz zależności, poprawną odpowiedzią jest **Cloud Trace w aplikacji**, nie Error Reporting czy sam Profiler.[^1]
- **Cloud Debugger (Stackdriver Debugger)**
    - Remote debugging snapshotów kodu w produkcji bez restartu; pojawia się raczej w starszych pytaniach.[^5]
    - W examtopics bardziej liczy się Trace/Profiler/Logging; Debugger rzadziej.
- **Data Studio**
    - Teraz znów Data Studio (business intelligence na danych m.in. z BigQuery, Cloud Logging exports).[^8]
    - Egzamin: gdy chcą „easy‑to‑share interactive dashboard from VM utilization logs, real‑time, quarterly aggregation”, pipeline to **Logging → BigQuery → Data Studio dashboard**.[^1]
- **Google Cloud Managed Service for Prometheus**
    - Fully managed Prometheus dla GKE/multi‑cluster; kluczowa odpowiedź przy global querying metrics across many clusters.[^6]
    - Nie wybieraj cross‑service/hierarchical federation z własnym Prometheusem, jeśli celem jest „scalable global Prometheus querying with minimal management overhead” – poprawna jest Managed Service for Prometheus.[^1]
- **Logs Explorer**
    - GUI do query logów w Cloud Logging; w pytaniach pojawia się wraz z log‑based metrics, filtrami, exclusions.[^6]
- **Metrics Explorer**
    - GUI do przeglądania metryk – np. `container_ephemeral_storage_used_bytes` przy DiskPressure na GKE.[^1]
    - Egzamin: aby znaleźć pods zużywające ephemeral storage, używasz **`container_ephemeral_storage_used_bytes`** w Metrics Explorer; nie ręczne `df -h` w podach.[^1]
- **OpenTelemetry**
    - Standard do telemetry (metrics, traces, logs); używany w pytaniach jako klient, który eksportuje do Cloud Monitoring/Trace/Logging.[^6][^4]
- **Ops Agent**
    - Zalecany agent dla metrics+logs na Compute Engine (zastępuje stare osobne logging/monitoring agents).[^9]
    - Egzamin: Agent Policy do rollout’u na wszystkie VMs, agent status w Cloud Ops VMs dashboard, rola IAM `logging.logWriter` i `monitoring.metricWriter` dla instance service account.[^6][^1]

***

## Security and secrets

Tutaj pytania są bardzo „opinionated” – Google ma jasne preferred patterns.[^3][^1]

- **Binary Authorization**
    - Enforce deploy‑time policies w GKE/Cloud Run; wymaga attestations po build/test; idealne do „shift left on security”.[^3]
    - Egzamin: gdy security team chce „only trusted images on GKE clusters”, odpowiedź to **Binary Authorization** (czasem + Container Analysis w Artifact Registry), nie tylko Falco/Twistlock czy same IAM policies.[^1]
- **Cloud KMS (Cloud Key Management Service)**
    - Zarządzanie kluczami kryptograficznymi; integracje z Storage, BigQuery, Secret Manager, Binary Authorization.[^3]
    - W pytaniach o signing attestations dla Binary Auth, klucz jest zazwyczaj trzymany w KMS i używany przez service account poprzez Workload Identity, nie JSON key na dysku.[^1]
- **Cloud Security Scanner**
    - Skanner web vulnerabilities; w examtopics pojawia się czasem jako distractor tam, gdzie prawidłowe jest Cloud SQL connections analysis lub Binary Authorization.[^3][^1]
    - Uważaj, żeby nie wybierać Security Scanner do **DDoS detection** czy do kontroli deployowanych kontenerów – to nie jego rola.
- **Secret Manager**
    - Managed store dla sekretów; integruje się z Cloud Run/Functions/GKE; exam lubi wzorzec „store API key in Secret Manager, inject as env var”.[^3][^1]
    - Zwróć uwagę: zapisywanie sekretu w kodzie lub w JSON key jest anty‑wzorzec; prawidłowa odpowiedź to Secret Manager z odpowiednimi IAM i ew. KMS na backend.

***

## Data and storage

Tu głównie chodzi o **eksport logów**, długotrwałą retencję oraz wybór medium do analizy.[^3][^1]

- **BigQuery**
    - Analityczna baza; świetna jako cel dla eksportu logów (log sinks) z Cloud Logging, później Data Studio dashboards.[^3][^1]
    - Pamiętaj: gdy wymagane są **real‑time interactive dashboards** i kwartalne agregacje, pipeline to Logging → BigQuery → Data Studio, nie Sheets.[^1]
- **Cloud SQL**
    - Managed relacyjna baza; w pytaniach pojawia się przy time‑outs, concurrency, connection counts.[^1]
    - Pułapka: gdy Cloud SQL ma time‑outy przy niezmienionej liczbie użytkowników, analiza powinna skupić się na rosnącej liczbie **DB connections**, nie na DDoS / Security Scanner.[^1]
- **Cloud Storage**
    - Obiektowy storage; używany jako cel dla eksportu logów z Cloud Logging (z Bucket Lock i 7‑year retention), oraz jako miejsce uploadu batchów danych przez partnerów.[^3][^1]
    - Egzamin: długotrwała retencja logów w regulowanym środowisku → **org‑level aggregated sink do Cloud Storage + Bucket Lock + 7‑year retention**.[^1]

***

## AI and assistance

Nowe rzeczy w exam guide: **Active Assist, Gemini, Personalized Service Health** – wszystkie na poziomie „assisted ops”.[^4][^6]

- **Active Assist**
    - Parasolka dla portfolio insightów (recommenders, idle resources, security, performance).[^6]
    - Pytania: „collect performance information and get insights/recommendations” – to sygnał na Active Assist, a nie ręczne przeglądanie dashboardów.[^4]
- **Gemini CLI / Gemini Cloud Assist / Gemini Code Assist**
    - AI‑assisted devops (log analysis, metrics interpretation, code); exam guide wymienia je jako narzędzia wspomagające, ale obecne pytania praktyczne w examtopics są jeszcze raczej klasyczne.[^4][^6]
    - Na razie traktuj je jako „nice to know”; raczej nie będą w trudnych, obliczeniowych pytaniach.
- **Personalized Service Health**
    - Widok health incydentów *specyficznych dla Twojego footprintu* w Google Cloud; integruje się z Cloud Logging i alertami.[^10][^11]
    - Na egzaminie może nakierować Cię przy pytaniach o incydenty vs ogólny status strony `status.cloud.google.com` – **Personalized** daje bardziej granularny widok i logi do własnej analizy.[^4]

***

## Cost and performance

Ostatnia grupa wiąże się z **FinOps**, autoscalingiem i planowaniem zasobów.[^4][^3]

- **Dynamic Workload Scheduler**
    - W exam guide jako element capacity planning / autoscaling; pomaga dopasować workloady do zasobów.[^4]
    - W pytaniach możesz go zobaczyć raczej pośrednio („quotas, limits, reservations, Dynamic Workload Scheduler”) – kluczowe jest, aby nie ignorować quotas przy multi‑region MIG.[^1]
- **Spot virtual machines (Spot VMs)**
    - Następca preemptible VMs: tańsze, ale mogą być zabierane przez Google; dobre do batchów, nie do SLA‑driven usług.[^3]
    - Egzamin: gdy wymagane są **business‑critical workloads, stable resources for months, zero performance impact**, poprawna odpowiedź to **Committed Use Discounts** na standardowych VM, **nie** Spot/preemptible.[^1]

***

Jeśli chcesz, mogę teraz:

- Przejść po grupie „Observability and SRE tools” i wypisać konkretne **wzorce pytań** (np. log sinks, views, bucket lock, SLO burn rate) w formie quick‑reference,
- Albo przygotować Ci osobny plik tekstowy z powyższym opracowaniem w języku polskim, ale z nazwami usług po angielsku (do wklejenia w notatki).
<span style="display:none">[^12]</span>

<div align="center">⁂</div>

[^1]: examtopics_gcp_devops.txt

[^2]: tech-2.txt

[^3]: https://docs.cloud.google.com/docs/product-list

[^4]: professional_cloud_devops_engineer_exam_guide_english-1-2.pdf

[^5]: https://k21academy.com/google-cloud/google-cloud-operations-suite-stackdriver/

[^6]: https://cloud.google.com/products/observability

[^7]: https://cloud.google.com/profiler/docs/about-profiler?hl=de

[^8]: https://cloud.google.com/blog/products/data-analytics/looker-studio-is-data-studio

[^9]: https://cloud.google.com/blog/products/operations/ops-agent-now-ga-and-it-includes-opentelemetry

[^10]: https://cloud.google.com/service-health

[^11]: https://status.cloud.google.com

[^12]: professional_cloud_devops_engineer_exam_guide_english-1-3.pdf

