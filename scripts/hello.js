'use strict';
module.exports = (robot) => {
    robot.hear(/sushi|すし|スシ|寿司/i, (msg) => {
        const username = msg.message.user.name;
        msg.send('寿司食べたい');
    });
  
    robot.hear(/暇|退屈|映画|時間がある|楽しい/i, (msg) => {
        const username = msg.message.user.name;
        const movies = ['http://blog.livedoor.jp/eiga_no_mikata/archives/cat_938596.html',  'https://www.youtube.com/watch?v=pWPUdz4BGtA'];
        const movie = movies[Math.floor(Math.random() * movies.length)];
        msg.send(movie);
    });

    robot.hear(/ 音楽|music|聞|やる気|いつもの/i, (msg) => {
        const username = msg.message.user.name;
        const musics = ['https://www.youtube.com/watch?v=pm8ZNb92u6E',  'https://www.youtube.com/watch?v=qnKC0r6Zzqo'];
        const music = musics[Math.floor(Math.random() * musics.length)];
        msg.send(music);
    });

    robot.hear(/ いいね|やるね|nice|面白い|おもしろ/i, (msg) => {
        const username = msg.message.user.name;
        const thanks = ['あざっす！！',  'Thanks!!','ニャヒヒ',  '頑張ります!'];
        const thank = thanks[Math.floor(Math.random() * thanks.length)];
        msg.send(thank);
    });

};