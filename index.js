window.HELP_IMPROVE_VIDEOJS = false;
angular.module("MineApp", []).controller("MineCtrl", function($scope,$timeout) {
  $scope.episodes = [
    'https://storage.googleapis.com/ultra-reflector-311507/RUCEJCANXVYA/22d_1621743163_251360.mp4',
    'https://storage.googleapis.com/ultra-reflector-311507/PFBFFZQ2CQ/22d_1621743416_251361.mp4',
    'https://storage.googleapis.com/ultra-reflector-311507/IO361SI2N1_X/st22_mine-2021-episode-3.1621741034.mp4',
    'https://storage.googleapis.com/ultra-reflector-311507/DMS4Z8PVAUPW/st22_mine-2021-episode-4.1621741788.mp4',
    'https://storage.googleapis.com/ultra-reflector-311507/XD5UGU7XU_W/22d_1621742793_252846.mp4',
    'https://storage.googleapis.com/ultra-reflector-311507/9OR16BLYKPLI/22d_1621785654_252847.mp4'
  ]

  $scope.play = function(episode) {
    $('#my-video').css('display','block');
    const player = videojs('my-video');
    player.src(
      {
        type: 'video/mp4',
        src: episode
      }
    );
    player.play();
  };
});
