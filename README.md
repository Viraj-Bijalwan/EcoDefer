# ⚡ EcoDefer — Carbon-Aware Workload Dispatcher

### ⚠️ The Problem
Data centers currently consume roughly 2% of global electricity, a figure rapidly accelerating due to AI model training and heavy computing requirements. 

However, electricity generation isn't uniform. During high-demand daytime hours, local power grids rely heavily on fossil fuels like coal and gas (high carbon intensity). During off-peak night hours, the grid often has an unutilized surplus of wind and hydro power (low carbon intensity). 

Right now, developers run heavy, non-time-sensitive cron jobs (e.g., database backups, deep learning epoch training, massive video transcoding batches) instantly. They burn fossil fuels purely out of habit because there is no bridge connecting live energy grid data to the developer's DevOps pipeline.

---

### 💡 The Solution: EcoDefer
EcoDefer is an intelligent middleware scheduler that transforms standard DevOps pipelines into carbon-aware infrastructure. Instead of executing resource-heavy tasks instantly, developers wrap their execution with a maximum tolerable delay parameter.

* **Grid Analytics Integration:** The application queries live carbon intensity forecasts across regional data center nodes.
* **Intelligent Workload Shifting:** The engine calculates the upcoming green energy peaks within the permitted delay window and automatically schedules the task execution for that specific trough.
* **Seamless Developer Experience:** Built to easily adapt as a standard GitHub Action, local CLI utility, or AWS plugin—requiring zero hardware reconfigurations or changes to existing source code.

---

### 🛠️ Tech Stack & Proof of Concept (PoC)
* **Frontend Dashboard:** A responsive, dark-mode terminal interface built with pure HTML, modern CSS utilities, and Vanilla JavaScript to model the developer portal.
* **Mathematical Model:** Simulates active API requests to regional power grids, computing real-time carbon offsets (e.g., dropping a 4.2 kWh task's carbon footprint from roughly 3.4 kg of CO2 down to 0.6 kg—an 82% reduction).
* **CI/CD Architecture:** Outlines a conceptual GitHub Actions integration via a custom action blueprint.
