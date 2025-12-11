{{- define "netflix.name" -}}
{{ .Chart.Name }}
{{- end -}}

{{- define "netflix.fullname" -}}
{{ .Chart.Name }}
{{- end -}}

{{- define "netflix.labels" -}}
app.kubernetes.io/name: {{ include "netflix.name" . }}
app.kubernetes.io/instance: {{ .Release.Name }}
{{- end -}}

{{- define "netflix.selectorLabels" -}}
app.kubernetes.io/name: {{ include "netflix.name" . }}
{{- end -}}
