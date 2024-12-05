# Overview

- One Backend Service
- One Frontend Service:
    - In App.js in the frontend, note the following:
    ```js
    const fetchData = async () => {
        try {
            const response = await axios.get('http://backend.yt.local:3001/');
            console.log(response);
            setData(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    ```
    We use `http://backend.yt.local:3001/` as it has been specified in ingress
- One infra folder that creates and launches the different k8s components.

# Steps

- First do `minikube addons enable ingress`
- Build and push the docker images under different names (mine uses vikaskaly)
- Change the image name in the deployment yaml files.
- Do `kubectl apply -f infra/`
- Do `sudo vim /etc/hosts` and make it look like this:
```bash
  1 ##
  2 # Host Database
  3 #
  4 # localhost is used to configure the loopback interface
  5 # when the system is booting.  Do not change this entry.
  6 ##
  7 127.0.0.1       localhost
  8 255.255.255.255 broadcasthost
 11 127.0.0.1       backend.yt.local
 12 127.0.0.1       frontend.yt.local
 13 ::1             localhost
```
- For Mac ( and maybe WSL, not sure :\ ) run `minikube tunnel`.
- Now go to `http://frontend.yt.local` and it should work
- If you update code:
    - Push again
    - Run ./cleanup.sh (First do `chmod 777 cleanup.sh`)
