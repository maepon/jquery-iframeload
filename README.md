# jQuery.iframeload

## example

```javascript
$('.same-domain-iframes')
    .iframeload()
    .on(
        'iframeLoad',
        function(){
            $(this).contents().find('body').css('background-color','#FCC');
        }
    );
```
