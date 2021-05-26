window.HELP_IMPROVE_VIDEOJS = false;
angular.module("MineApp", []).controller("MineCtrl", function($scope,$timeout) {
  $scope.episodes = [
    'https://storage.googleapis.com/graphite-pad-313804/XLAAS5JE5ZD7/23d_1621957195_251360.mp4',
    'https://storage.googleapis.com/graphite-pad-313804/2XLF9O898DZJ/23d_1621940552_251361.mp4',
    'https://storage.googleapis.com/graphite-pad-313804/C7OOFDJM8V/st23_mine-2021-episode-3.1621936515.mp4',
    'https://storage.googleapis.com/peaceful-tome-311917/_39646BZLP5H/st22_mine-2021-episode-4.1621999124.mp4',
    'https://storage.googleapis.com/graphite-pad-313804/7CPXQWVAMFN9/23d_1621939708_252846.mp4',
    'https://storage.googleapis.com/peaceful-tome-311917/8YNQJK3OAF1/22d_1622005921_252847.mp4'
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
