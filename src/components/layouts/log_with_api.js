import axios from "axios";
import Swal from 'sweetalert2';
import * as Config from "../../Utils/Config";

const loginWithApi = async (UserDetails) => {
    console.log("Broker - ", UserDetails.BrokerName);
    console.log("Base Url - ", Config.base_url);


    if (UserDetails) {

        if (UserDetails.BrokerName.toUpperCase() === "Aliceblue".toUpperCase()) {
            console.log("ALICE", UserDetails);

            var data = {
                Username: UserDetails.Username,
                session: "",
                AccToken: "",
                usrid: "",
                sid: "",
                jwt_Token: "",
            }

            try {
                const response = await axios.post(`${Config.base_url}ConnectBroker`, data);

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
                    console.log(error);
                });


        }


        if (UserDetails.BrokerName.toUpperCase() === "ICICI") {
            console.log("ICICI", UserDetails);


            let config = {
                method: 'get',
                maxBodyLength: Infinity,
                url: Config.base_url + 'ICICIBroker/' + UserDetails.Username,
                headers: {}
            };

            axios.request(config)
                .then((response) => {
                    console.log("response", response)
                    if (response.data.Status == true) {

                        window.location.href = response.data.Api;
                    }
                })
                .catch((error) => {
                    console.log(error);
                });
        }


        if (UserDetails.BrokerName.toUpperCase() === "UPSTOX") {
            console.log("UpstoxBroker", UserDetails);


            let config = {
                method: 'get',
                maxBodyLength: Infinity,
                url: Config.base_url + 'UpstoxBroker/' + UserDetails.Username,
                headers: {}
            };

            axios.request(config)
                .then((response) => {
                    console.log("response", response)
                    if (response.data.Status == true) {

                        window.location.href = response.data.Api;
                    }
                })
                .catch((error) => {
                    console.log(error);
                });
        }


        if (UserDetails.BrokerName.toUpperCase() === "5PAISA") {
            console.log("5PAISA", UserDetails);


            let config = {
                method: 'get',
                maxBodyLength: Infinity,
                url: Config.base_url + '5PaisaBroker/' + UserDetails.Username,
                headers: {}
            };

            axios.request(config)
                .then((response) => {
                    console.log("response", response)
                    if (response.data.Status == true) {

                        window.location.href = response.data.Api;
                    }
                })
                .catch((error) => {
                    console.log(error);
                });
        }


        if (UserDetails.BrokerName.toUpperCase() === "MASTERTRUST") {
            console.log("MASTERTRUST", UserDetails);


            let config = {
                method: 'get',
                maxBodyLength: Infinity,
                url: Config.base_url + 'MastertrustBroker/' + UserDetails.Username,
                headers: {}
            };

            axios.request(config)
                .then((response) => {
                    console.log("response", response)
                    if (response.data.Status == true) {

                        window.location.href = response.data.Api;
                    }
                })
                .catch((error) => {
                    console.log(error);
                });
        }




    }


    // else if (broker_id === "15" || broker_id === 15) {
    //     window.location.href = "https://kite.zerodha.com/connect/login?v=3&api_key=" + UserDetails.api_key;
    //     // alert("broker-15")
    // }

    // else if (broker_id === "20" || broker_id === 20) {

    //     axios({
    //         url: `${Config.base_url}dhan`,
    //         method: "post",
    //         data: {
    //             Email: UserDetails.Email,
    //         },
    //     }).then((res) => {

    //         if (res.data.status == true) {

    //             toast.success(res.data.msg)
    //             setTimeout(() => {
    //                 window.location.reload();
    //             }, 1500);
    //         } else {
    //             toast.error(res.data.msg)
    //         }

    //     });

    // }
};
export default loginWithApi;