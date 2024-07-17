import axios from "axios";
import Swal from 'sweetalert2';
import * as Config from "../../Utils/Config";

const loginWithApi = async (UserDetails) => {


    if (UserDetails) {

        if (UserDetails.BrokerName.toUpperCase() === "Aliceblue".toUpperCase()) {


            try {
                const response = await axios.get(Config.base_url + 'Aliceblue/' + UserDetails.Username);

                if (response.data.Status) { // Assuming the status is in response.data.Status

                    Swal.fire({
                        title: 'Success!',
                        text: 'Trading On successfully.',
                        icon: 'success',
                        confirmButtonText: 'OK',
                        timer: 1000
                    }).then(() => {
                        setTimeout(() => {
                            window.location.reload();
                        }, 1000);
                    });
                } else {

                    Swal.fire({
                        title: 'Error!',
                        text: 'Trading Off successfully.',
                        icon: 'error',
                        confirmButtonText: 'OK',
                        timer: 1000
                    }).then(() => {
                        setTimeout(() => {
                            window.location.reload();

                        }, 1000);
                    });
                }
            } catch (err) {
                console.error("Error in ConnectBroker request", err);
                Swal.fire({
                    title: 'Error!',
                    text: 'An error occurred. Please try again later.',
                    icon: 'error',
                    confirmButtonText: 'OK',
                });
            }
        }

        if (UserDetails.BrokerName.toUpperCase() === "ANGEL") {

            let config = {
                method: 'get',
                maxBodyLength: Infinity,
                url: 'http://193.239.237.95:8000/AngelBroker/' + UserDetails.Username,
                headers: {}
            };

            axios.request(config)
                .then((response) => {
                    if (response.data.Status == true) {
                        window.location.href = response.data.Api;
                    }
                })
                .catch((error) => {
                    console.log("Error", error);
                });


        }

        if (UserDetails.BrokerName.toUpperCase() === "ICICI") {



            let config = {
                method: 'get',
                maxBodyLength: Infinity,
                url: Config.base_url + 'ICICIBroker/' + UserDetails.Username,
                headers: {}
            };

            axios.request(config)
                .then((response) => {

                    if (response.data.Status == true) {

                        window.location.href = response.data.Api;
                    }
                })
                .catch((error) => {
                    console.log("Error", error);
                });
        }

        if (UserDetails.BrokerName.toUpperCase() === "UPSTOX") {



            let config = {
                method: 'get',
                maxBodyLength: Infinity,
                url: Config.base_url + 'UpstoxBroker/' + UserDetails.Username,
                headers: {}
            };

            axios.request(config)
                .then((response) => {

                    if (response.data.Status == true) {

                        window.location.href = response.data.Api;
                    }
                })
                .catch((error) => {
                    console.log("Error", error);
                });
        }

        if (UserDetails.BrokerName.toUpperCase() === "5PAISA") {



            let config = {
                method: 'get',
                maxBodyLength: Infinity,
                url: Config.base_url + '5PaisaBroker/' + UserDetails.Username,
                headers: {}
            };

            axios.request(config)
                .then((response) => {

                    if (response.data.Status == true) {

                        window.location.href = response.data.Api;
                    }
                })
                .catch((error) => {
                    console.log("Error", error);
                });
        }

        if (UserDetails.BrokerName.toUpperCase() === "MASTERTRUST") {

            let config = {
                method: 'get',
                maxBodyLength: Infinity,
                url: Config.base_url + 'MastertrustBroker/' + UserDetails.Username,
                headers: {}
            };

            axios.request(config)
                .then((response) => {

                    if (response.data.Status == true) {

                        window.location.href = response.data.Api;
                    }
                })
                .catch((error) => {
                    console.log("Error", error);
                });
        }

        if (UserDetails.BrokerName.toUpperCase() === "FYERS") {

            let config = {
                method: 'get',
                maxBodyLength: Infinity,
                url: Config.base_url + 'FayersBroker/' + UserDetails.Username,
                headers: {}
            };

            axios.request(config)
                .then((response) => {

                    if (response.data.Status == true) {

                        window.location.href = response.data.Url;
                    }
                })
                .catch((error) => {
                    console.log("Error", error);
                });
        }

        if (UserDetails.BrokerName.toUpperCase() === "DHAN".toUpperCase()) {

          
            try {
                const response = await axios.get(Config.base_url + 'Dhan/' + UserDetails.Username);
               

                if (response.data.Status) { // Assuming the status is in response.data.Status

                    Swal.fire({
                        title: 'Success!',
                        text: 'Trading On successfully.',
                        icon: 'success',
                        confirmButtonText: 'OK',
                        timer: 1000
                    }).then(() => {
                        setTimeout(() => {
                            // window.location.reload();
                        }, 1000);
                    });
                } else {

                    Swal.fire({
                        title: 'Error!',
                        text: 'Trading Off successfully.',
                        icon: 'error',
                        confirmButtonText: 'OK',
                        timer: 1000
                    }).then(() => {
                        setTimeout(() => {
                            // window.location.reload();

                        }, 1000);
                    });
                }
            } catch (err) {
                console.error("Error in ConnectBroker request", err);
                Swal.fire({
                    title: 'Error!',
                    text: 'An error occurred. Please try again later.',
                    icon: 'error',
                    confirmButtonText: 'OK',
                });
            }
        }

        if (UserDetails.BrokerName.toUpperCase() === "ZEBULL") {
            let config = {
                method: 'get',
                maxBodyLength: Infinity,
                url: Config.base_url + 'Zebull/' + UserDetails.Username,
                headers: {}
            };

            axios.request(config)
                .then((response) => {
                    console.log("response", response);

                    let swalOptions = {
                        confirmButtonText: 'OK',
                        timer: 2000
                    };

                    if (response.data.Status) {
                        swalOptions.title = 'Success!';
                        swalOptions.text = 'Trading On successfully.';
                        swalOptions.icon = 'success';
                    } else {
                        swalOptions.title = 'Error!';
                        swalOptions.text = 'Trading Off successfully.';
                        swalOptions.icon = 'error';
                    }

                    Swal.fire(swalOptions).then(() => {
                        window.location.reload();
                    });

                })
                .catch((error) => {
                    console.log("Error", error);
                });
        }


        if (UserDetails.BrokerName.toUpperCase() === "MANDOT") {
            let config = {
                method: 'get',
                maxBodyLength: Infinity,
                url: Config.base_url + 'Mandot/' + UserDetails.Username,
                headers: {}
            };

            axios.request(config)
                .then((response) => {

                    let swalOptions = {
                        confirmButtonText: 'OK',
                        timer: 4000
                    };

                    if (response.data.Status) {
                        swalOptions.title = 'Success!';
                        swalOptions.text = 'Trading On successfully.';
                        swalOptions.icon = 'success';
                    } else {
                        swalOptions.title = 'Error!';
                        swalOptions.text = response.data.massage;
                        swalOptions.icon = 'error';
                    }

                    Swal.fire(swalOptions).then(() => {
                        // window.location.reload();
                    });

                })
                .catch((error) => {
                    console.log("Error", error);
                });
        }


        if (UserDetails.BrokerName.toUpperCase() === "INDIRA") {
            let config = {
                method: 'get',
                maxBodyLength: Infinity,
                url: Config.base_url + 'Indira/' + UserDetails.Username,
                headers: {}
            };

            axios.request(config)
                .then((response) => {
                    console.log("response", response.data);

                    let swalOptions = {
                        confirmButtonText: 'OK',
                        timer: 4000
                    };

                    if (response.data.Status) {
                        swalOptions.title = 'Success!';
                        swalOptions.text = 'Trading On successfully.';
                        swalOptions.icon = 'success';
                    } else {
                        swalOptions.title = 'Error!';
                        swalOptions.text = response.data.massage;
                        swalOptions.icon = 'error';
                    }

                    Swal.fire(swalOptions).then(() => {
                        // window.location.reload();
                    });

                })
                .catch((error) => {
                    console.log("Error", error);
                });
        }

    }



};
export default loginWithApi;