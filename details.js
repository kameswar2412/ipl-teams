


//  console.log(playerDataLocal)
$(document).ready(function() {
    let teamFromStorage=localStorage.getItem('teamdata')==null?[]:JSON.parse(localStorage.getItem('teamdata'))
let playerFromStorage=localStorage.getItem('playersNames')==null?[]:JSON.parse(localStorage.getItem('playersNames'))

 var teamId = window.location.search.split("=")[1]
    for(var i=0;i<teamFromStorage.length; i++) {
       
        if(teamId == teamFromStorage[i].id){
            
            var count=0
            $('.team-name').html(teamFromStorage[i].teamName)
            $('#team-logo').attr('src',teamFromStorage[i].teamIcon)
            $('.top-batsman').html(teamFromStorage[i].topBatsmen)
            $('.top-bowler').html(teamFromStorage[i].topBowler)
            $('.win-count').html(teamFromStorage[i].champoinshipWonCount)
                console.log(teamFromStorage[i].teamName)

               
            for(var j=0;j<playerFromStorage.length;j++) {
                
                console.log(playerFromStorage[j].team)

               
                if(playerFromStorage[j].team.split("").sort().join("")==teamFromStorage[i].teamName.split("").sort().join("")) {

                    



                    count++
                    var playerComb = $('<div>').addClass("player")
                    var playerDetail = $('<a>').attr('href','./playerDetail.html?playerId='+playerFromStorage[j].id)
                    var playerImg =  $('<img>').addClass("player-image").attr('src',playerFromStorage[j].playerPicUrl)
                    playerDetail.append(playerImg)
                    var playerName = $('<p>').addClass("player-name").html(playerFromStorage[j].playerName)
                    var playerTeam = $('<p>').html("Team: ")
                    var playerTeamName = $('<span>').addClass('player-team').html(playerFromStorage[j].from)
                    playerTeam.append(playerTeamName)
                    var price = $('<p>').html("Price: ")
                    var playerPrice = $('<span>').addClass('player-price').html(playerFromStorage[j].price)
                    price.append(playerPrice)
                    var status = $('<p>').html("Playing Status: ")
                    if(playerFromStorage[j].isPlaying){
                        var playingStatus = $('<span>').addClass("playing-status").html("Playing")
                    }else{
                        var playingStatus = $('<span>').addClass("playing-status").html("On-bench")
                    }
                    status.append(playingStatus)
                    var role = $('<p>').html("Role: ")
                    var playerRole = $('<span>').addClass('player-role').html(playerFromStorage[j].description)
                    role.append(playerRole)
                    playerComb.append(playerDetail,playerName,playerTeam,price,status,role)
                    $('.team-player').append(playerComb)
                }
            }
            $('.player-count').html(count)
        }
    }
}) 