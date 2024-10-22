function llamarApiDenueBus(){
$.ajax({
        type: 'GET',
        url: "https://gaia.inegi.org.mx/wscatgeo/mgee/",
        cache: false,
        async: false,
        dataType: "json",
        success: function (data) {
            for (var i = 0; i < data.datos.length; i++) {
                $("#CVE_ENT").append("<option value='" + data.datos[i].cve_agee + "'>" + data.datos[i].nom_agee + "</option>");
            }
        }, error: function (objeto, tipo, causa) {
            if (objeto.status == "404" || objeto.status == "200") {
                var func = function () {
                    window.location.href = "inicioweb.jsp";
                };

                $.avisoMsg("La sesión ha caducado", func);
            } else {
                alert(tipo + "  " + causa + "\nStatusfw:" + objeto.status);
            }
        }, complete: function (xhr, status) {
            $('#spinner').hide();
        }
    });
 }