class EventsHandler {
    constructor(googleMaps) {
        this.googleMaps = googleMaps;
    }

    getAllActivities() {
        let self = this;
       // var map = new google.maps.Map(document.getElementById('map-canvas'), this.googleMaps);
        //  this.marker = new google.maps.Marker({
        //     map: this.map,
        //     position: { lat: 51.508642, lng: -0.120850 }
        // });
        $.get('/loadAllActivities', (data) => {
            for (let i = 0; i < data.length; i++) {
                var marker = new google.maps.Marker({

                    position: { lat: data[i].location.lat, lng: data[i].location.lng },
                    label: {
                        text: data[i].category,
                        color: 'white',
                        fontSize: "8px"
                    },
                    title: data[i].subject
                });
                // To add the marker to the map, call setMap();
                marker.setMap(self.googleMaps.map);
            }
        })
    }

    registerAddActivity() {
        $('#createActivity').on('click', () => {
            let $input = $("#postText");
            var obj;

            
                let self = this;
                $.post('/addPost', obj, function (newActivity) {
                    //self.postsRepository.addPostFromDB(newPost);
                   // self.postsRenderer.renderPosts(self.postsRepository.posts);
                    $input.val("");
                })    
        });
    }

    registerRemoveActivity() {
       /*  this.$posts.on('click', '.remove-post', (event) => {
            let index = $(event.currentTarget).closest('.post').index();
            let postId = $(event.currentTarget).closest('.post').data('id');
            let self = this;
            $.ajax({
                method: 'DELETE',
                url: '/deletePost/' + postId,
                success: () => {
                    self.postsRepository.removePost(index);
                    self.postsRenderer.renderPosts(self.postsRepository.posts);
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    console.log(textStatus);
                }
            });
        }); */
    }

}
//self.map.setCenter(this.marker.getPosition())
export default EventsHandler