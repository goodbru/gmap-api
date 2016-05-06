 var marker;
      var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          zoom: 8,
          center: {lat: 3.343895, lng: 37.32573}
        });
  
      marker = new google.maps.Marker({
        map: map,
        draggable: true,
        animation: google.maps.Animation.DROP,
        position: {lat: 3.343895, lng: 37.325753}
      });
      marker.addListener('click', toggleBounce);
      }

      function toggleBounce() {
        if (marker.getAnimation() !== null) {
          marker.setAnimation(null);
        }else{
          marker.setAnimation(google.maps.Animation.BOUNCE);
        }
      }