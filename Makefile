all:
	echo 'use some target manually'

docker_buildimg:
	docker build -t jira-override-builder .

xpi:
	id -u
	docker run --rm -u `id -u` -v $(PWD)/jira-overrides/:/jira-overrides jira-override-builder sh -c 'export HOME=/jira-overrides && cd "$$HOME" && web-ext build --overwrite-dest'

sign:
	read KEY SECRET < mozilla-addon-auth && docker run --rm -u `id -u` -e KEY="$$KEY" -e SECRET="$$SECRET" -v $(PWD)/jira-overrides:/jira-overrides jira-override-builder sh -c 'export HOME=/jira-overrides && cd "$$HOME" && web-ext sign --api-key=$$KEY --api-secret=$$SECRET'
