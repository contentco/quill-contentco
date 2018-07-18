let Block = Quill.import('blots/block');
let Icon = Quill.import('ui/icons');

class Lead extends Block {

  static icon() {
    return '<svg viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="nonzero"><rect class="main" fill="#444" x="2" y="3" width="14" height="4" rx="1"/><rect fill="#D0D0D0" x="2" y="9" width="14" height="2" rx="1"/><rect fill="#D0D0D0" x="2" y="13" width="14" height="2" rx="1"/></g></svg>'
  }
}

Lead.blotName = 'lead';
Lead.tagName = 'DIV';
Lead.className = 'blog__lead';

Icon['lead'] = Lead.icon();

Quill.register('formats/lead', Lead);

