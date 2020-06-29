import { fromEvent } from 'rxjs';
import { map, tap } from 'rxjs/operators';

const text = document.createElement('div');
text.innerHTML = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tellus lectus, mollis eget pulvinar rhoncus, ultrices vitae turpis. Fusce sit amet ex id nibh consequat finibus et ac lectus. Mauris ut urna at dolor dapibus fermentum vel a orci. Quisque condimentum orci et diam fermentum, in porta felis dictum. Ut fermentum pretium vulputate. Sed dignissim sed ante quis placerat. Quisque sollicitudin ex at lacinia mollis. Sed finibus interdum metus eu lobortis. Nullam id volutpat dolor. Sed a nisl eu purus convallis pulvinar ac in ipsum.
<br><br><br>
Praesent porta nec metus non ornare. Pellentesque euismod ullamcorper nibh eget volutpat. Nullam sed risus eu felis tempor cursus. Nam non sem sed dolor imperdiet lobortis. Fusce luctus sapien ac lacus scelerisque finibus vitae eu odio. Nunc bibendum pulvinar nibh at blandit. Nunc rutrum bibendum porttitor. Aliquam accumsan massa quis est vehicula, in dignissim purus tincidunt. Maecenas elementum ante pellentesque congue pulvinar. Duis nec ullamcorper est, sit amet auctor felis. Nam finibus lorem sit amet accumsan auctor. In quam elit, pretium non justo at, sodales viverra justo.
<br><br><br>
Nullam id risus eu leo eleifend gravida. Duis eu sagittis ante. Curabitur enim magna, posuere eu semper eget, lacinia porttitor nunc. Mauris tincidunt nulla non justo dictum, eget mollis nisi malesuada. Sed tincidunt, ante id rhoncus faucibus, odio urna consectetur eros, eu venenatis diam mi nec massa. Cras mi tortor, tincidunt vitae tellus et, accumsan pulvinar lectus. In tincidunt, purus eget mollis semper, purus velit tempor arcu, varius volutpat mi augue id sapien. Nunc orci orci, pulvinar nec laoreet a, eleifend eu ex. Praesent eros turpis, fringilla eget blandit ut, laoreet ut dolor. Curabitur in sem quis sapien viverra vestibulum vitae eget lacus.
<br><br><br>
Proin ut facilisis orci. Etiam a hendrerit magna. Maecenas ac quam finibus, cursus lectus ut, pulvinar ligula. Maecenas non nunc vel metus molestie tempus eu nec urna. Vivamus ut libero quis justo porta rutrum eleifend eu mauris. Donec quis nisl elementum, volutpat dui eu, sodales ipsum. Aenean ultrices posuere mauris in dapibus. Suspendisse in sollicitudin lectus. Vestibulum feugiat erat id felis accumsan pellentesque. Nam molestie nisl dui, et porttitor elit finibus at. Aenean nec bibendum lacus, eget facilisis sapien. Curabitur accumsan laoreet varius. Morbi pulvinar tellus facilisis, dapibus nulla ut, vestibulum velit. Integer pulvinar ipsum et facilisis molestie. Aenean id eros ac purus gravida sollicitudin.
<br><br><br>
Integer aliquam magna metus. In eget pharetra tortor. Nullam dictum aliquet mauris ut molestie. Quisque consectetur porta commodo. Donec hendrerit dolor in elit rutrum rutrum. Suspendisse ut leo finibus odio eleifend semper vitae et elit. Nulla lacinia vestibulum ante. Ut suscipit lacus dolor, sit amet pellentesque tellus auctor quis. Praesent tempor ipsum magna, nec mattis dolor facilisis eu. Morbi eget gravida justo. Duis eu magna et ipsum accumsan interdum. Cras semper interdum pharetra. In sem lacus, fringilla id tortor a, molestie molestie nulla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
<br><br><br>
Donec porttitor dapibus enim, in fringilla leo luctus vitae. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam mollis molestie arcu, ac ullamcorper odio porttitor sed. Nullam enim turpis, pretium vel dignissim in, iaculis et mi. Proin suscipit maximus erat, at volutpat mi pretium ac. Donec eget odio pretium, ullamcorper neque nec, lacinia velit. Cras id lacus interdum, dictum eros vitae, sodales elit. Donec pulvinar dictum metus eget commodo. Phasellus rutrum nec leo quis posuere. Etiam viverra eleifend odio eu elementum. Suspendisse eget iaculis enim. Pellentesque imperdiet mollis diam, consectetur varius est interdum a. Nulla vitae cursus est. In hendrerit metus quis imperdiet convallis. Vestibulum euismod, magna eu congue dignissim, tellus sem posuere risus, quis sodales felis neque sed ante. Quisque tortor erat, finibus eu nulla nec, pretium dignissim tellus.
<br><br><br>
In sed eleifend lorem, eu gravida ipsum. Aliquam porta viverra erat, sit amet sollicitudin arcu luctus vitae. Curabitur lobortis volutpat velit vitae hendrerit. Suspendisse id diam eu felis laoreet porttitor vel tincidunt purus. Nullam venenatis ligula ut vestibulum consequat. Nulla ac mauris rhoncus libero lacinia consectetur. Nulla eget justo at nibh rutrum commodo nec in velit. Cras ullamcorper, orci at gravida efficitur, nisl purus consequat lorem, in eleifend dolor nulla sit amet nunc. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc id elit vel sapien laoreet elementum. Vivamus posuere quam lectus, ac tincidunt lectus vulputate eget. Nulla leo tortor, laoreet vitae convallis vitae, ornare in quam. Sed varius ipsum sed sem tincidunt pretium. Sed diam nibh, commodo sodales molestie nec, bibendum eu justo.`;

const body = document.querySelector('body');
body.append(text);

const progressBar = document.createElement('div');
progressBar.setAttribute('class', 'progress-bar');
body.append(progressBar);

// Streams
const scroll$ = fromEvent(document, 'scroll');

// scroll$.subscribe(console.log);

const progress$ = scroll$.pipe(
    map(event => calculateScrollPercentage(event)),
    tap(console.log)
);

progress$.subscribe(percentage => {
    progressBar.style.width = `${ percentage }%`;
});

const calculateScrollPercentage = (event) => {
    const { scrollTop, scrollHeight, clientHeight } = event.target.documentElement;
    // console.log({ scrollTop, scrollHeight, clientHeight });
    return (scrollTop / (scrollHeight - clientHeight)) * 100;
}