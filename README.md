Helm charts

using helm charts to deply nginx application 

used helm chart repo for database (mariadb) and adminer
 - configured the root password and database during mariadb helm chart installation 
 - populated database with adminer

created my own helm charts for backend (node app) and frontend (nginx serving react)
- helm create \<chart name>
- configure values.yaml, input my values (e.g. image, tag, service, liveness/readiness probe) 
- mounted config map to my react chart
  - created configmap ingluding file to be mounted
  - in values included the volumes and the volume mounts
  - templating syntax is quite particular {{- toYaml .Values.confFile | nindent 12 }}
       - nindent used to allign multi-line strings
       - toYaml - helm function, converts data passed into template to yaml 