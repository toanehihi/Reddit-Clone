document.addEventListener('DOMContentLoaded', function() {
    // Make the vote buttons interactive
    const upvoteButtons = document.querySelectorAll('.vote-buttons i:first-child');
    const downvoteButtons = document.querySelectorAll('.vote-buttons i:last-child');
    
    upvoteButtons.forEach(button => {
        button.addEventListener('click', function() {
            if (this.classList.contains('upvoted')) {
                this.classList.remove('upvoted');
                this.style.color = '#818384';
            } else {
                this.classList.add('upvoted');
                this.style.color = '#ff4500';
                
                // Remove downvoted if exists
                const downvoteButton = this.parentElement.querySelector('i:last-child');
                if (downvoteButton.classList.contains('downvoted')) {
                    downvoteButton.classList.remove('downvoted');
                    downvoteButton.style.color = '#818384';
                }
            }
        });
    });
    
    downvoteButtons.forEach(button => {
        button.addEventListener('click', function() {
            if (this.classList.contains('downvoted')) {
                this.classList.remove('downvoted');
                this.style.color = '#818384';
            } else {
                this.classList.add('downvoted');
                this.style.color = '#7193ff';
                
                // Remove upvoted if exists
                const upvoteButton = this.parentElement.querySelector('i:first-child');
                if (upvoteButton.classList.contains('upvoted')) {
                    upvoteButton.classList.remove('upvoted');
                    upvoteButton.style.color = '#818384';
                }
            }
        });
    });
    
    // Make the join buttons interactive
    const joinButtons = document.querySelectorAll('.join-button');
    
    joinButtons.forEach(button => {
        button.addEventListener('click', function() {
            if (this.textContent === 'Join') {
                this.textContent = 'Joined';
                this.style.backgroundColor = '#1a1a1b';
                this.style.color = '#d7dadc';
                this.style.border = '1px solid #d7dadc';
            } else {
                this.textContent = 'Join';
                this.style.backgroundColor = '#0079d3';
                this.style.color = 'white';
                this.style.border = 'none';
            }
        });
    });
    
    // Make tabs interactive
    const tabs = document.querySelectorAll('.tab');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Remove active class from all tabs
            tabs.forEach(t => t.classList.remove('active'));
            
            // Add active class to clicked tab
            this.classList.add('active');
        });
    });

    // Add functionality to post titles to navigate to topic pages
    const postTitles = document.querySelectorAll('.post-title');

    postTitles.forEach(title => {
        title.addEventListener('click', function() {
            const topic = this.getAttribute('data-topic');
            if (topic) {
                window.location.href = topic + '.html';
            }
        });
    });

    // Add functionality to post container
    const posts = document.querySelectorAll('.post');

    posts.forEach(post => {
        post.addEventListener('click', function(e) {
            // Only navigate if they clicked on the post, not on buttons/votes
            if (!e.target.closest('.vote-buttons') && 
                !e.target.closest('.comment-button') && 
                !e.target.closest('.share-button') && 
                !e.target.closest('.join-button') && 
                !e.target.closest('.more-options')) {
                
                const topic = this.getAttribute('data-topic');
                if (topic) {
                    window.location.href = topic + '.html';
                }
            }
        });
    });

    // Make subreddit links clickable
    const subreddits = document.querySelectorAll('.subreddit');

    subreddits.forEach(subreddit => {
        subreddit.addEventListener('click', function(e) {
            e.stopPropagation(); // Prevent post click from triggering
            
            // Extract topic from subreddit text
            let topic = this.textContent.toLowerCase().replace('r/', '');
            
            // Map some common subreddits to topics
            const topicMap = {
                'movies': 'movies',
                'anime': 'anime',
                'animequestions': 'anime',
                'gaming': 'gaming',
                'pcgaming': 'gaming',
                'technology': 'technology'
            };
            
            if (topicMap[topic]) {
                window.location.href = topicMap[topic] + '.html';
            }
        });

        // Make it look clickable
        subreddit.style.cursor = 'pointer';
        subreddit.style.color = '#4fbcff';
    });

    // Make sidebar sections collapsible
    const sidebarSectionHeaders = document.querySelectorAll('.section-header');
    
    sidebarSectionHeaders.forEach(header => {
        // Set cursor to pointer to indicate it's clickable
        header.style.cursor = 'pointer';
        
        header.addEventListener('click', function() {
            // Find the section menu to toggle
            const sectionMenu = this.parentElement.querySelector('.section-menu');
            const icon = this.querySelector('i');
            
            if (sectionMenu.style.display === 'none') {
                // Expand the section
                sectionMenu.style.display = 'block';
                icon.classList.remove('fa-chevron-down');
                icon.classList.add('fa-chevron-up');
            } else {
                // Collapse the section
                sectionMenu.style.display = 'none';
                icon.classList.remove('fa-chevron-up');
                icon.classList.add('fa-chevron-down');
            }
        });
    });

    // Login Modal Functionality
    // Get the login button, modal, and close button
    const loginButton = document.querySelector('.login');
    const loginModal = document.getElementById('loginModal');
    const closeButton = document.getElementById('closeLoginModal');
    const loginForm = document.getElementById('loginForm');

    // Only setup login functionality if all elements exist
    if (loginButton && loginModal && closeButton && loginForm) {
        // Show the modal when login button is clicked
        loginButton.addEventListener('click', function() {
            loginModal.style.display = 'flex';
        });

        // Hide the modal when close button is clicked
        closeButton.addEventListener('click', function() {
            loginModal.style.display = 'none';
        });

        // Hide the modal when clicking outside the modal content
        loginModal.addEventListener('click', function(event) {
            if (event.target === loginModal) {
                loginModal.style.display = 'none';
            }
        });

        // Handle form submission
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            // Get form values
            const username = loginForm.querySelector('input[type="text"]').value;
            const password = loginForm.querySelector('input[type="password"]').value;
            
            // Simple validation
            if (username && password) {
                // Here you would normally send a request to your backend
                // For this demo, we'll just log the values and show a success message
                console.log('Username:', username);
                console.log('Password:', password);
                
                // Save login info to localStorage so it persists across pages
                localStorage.setItem('redditUsername', username);
                
                // Display logged in state
                loginButton.textContent = username;
                loginButton.style.border = 'none';
                loginButton.style.backgroundColor = 'transparent';
                
                // Close the modal
                loginModal.style.display = 'none';
                
                // Show a welcome message in the console
                console.log('Successfully logged in as ' + username);
            }
        });
    }
    
    // Add functionality for "See more" links in the sidebar
    const seeMoreLinks = document.querySelectorAll('.see-more a');
    
    seeMoreLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent navigating to the href
            
            // Create and show the notifications sequentially
            showNotification('This feature is not available yet, see you soon nigga!!', 3000);
            
            // Show second notification with a delay to prevent overlap
            setTimeout(() => {
                showNotification('BOMBARDINO CROCODILO vs ALL Italian Brainrot AI Animals Compilation', 3000);
            }, 3200); // Wait for the first notification to almost finish
            
            // Open YouTube in a new tab
            setTimeout(() => {
                window.open('https://www.youtube.com/watch?v=jA27zrbJuxQ', '_blank');
            }, 4000);
        });
    });
    
    // Track active notifications for positioning
    let activeNotifications = [];
    
    // Notification function
    function showNotification(message, duration) {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.textContent = message;
        
        // Style the notification
        notification.style.position = 'fixed';
        notification.style.right = '20px';
        notification.style.backgroundColor = '#0079d3';
        notification.style.color = 'white';
        notification.style.padding = '12px 20px';
        notification.style.borderRadius = '4px';
        notification.style.boxShadow = '0 2px 5px rgba(0,0,0,0.2)';
        notification.style.zIndex = '1000';
        notification.style.opacity = '0';
        notification.style.transition = 'opacity 0.3s ease-in-out';
        notification.style.maxWidth = '300px'; // Limit width
        
        // Position notification based on existing notifications
        positionNotification(notification);
        
        // Add to document
        document.body.appendChild(notification);
        
        // Add to active notifications array
        activeNotifications.push(notification);
        
        // Fade in
        setTimeout(() => {
            notification.style.opacity = '1';
        }, 10);
        
        // Remove after duration
        setTimeout(() => {
            notification.style.opacity = '0';
            
            // Remove from active notifications
            const index = activeNotifications.indexOf(notification);
            if (index > -1) {
                activeNotifications.splice(index, 1);
            }
            
            // Remove from DOM after fade out
            setTimeout(() => {
                document.body.removeChild(notification);
                // Reposition remaining notifications
                repositionAllNotifications();
            }, 300);
        }, duration);
    }
    
    // Position a new notification
    function positionNotification(notification) {
        if (activeNotifications.length === 0) {
            // First notification starts at the bottom
            notification.style.bottom = '20px';
        } else {
            // Calculate position based on existing notifications
            let bottomPosition = 20;
            
            // Get total height of all active notifications plus margins
            activeNotifications.forEach(activeNotification => {
                bottomPosition += activeNotification.offsetHeight + 10; // 10px margin between notifications
            });
            
            notification.style.bottom = bottomPosition + 'px';
        }
    }
    
    // Reposition all notifications after one is removed
    function repositionAllNotifications() {
        let bottomPosition = 20;
        
        activeNotifications.forEach(notification => {
            notification.style.bottom = bottomPosition + 'px';
            bottomPosition += notification.offsetHeight + 10;
        });
    }

    // Check if user is already logged in (from another page)
    if (loginButton) {
        const savedUsername = localStorage.getItem('redditUsername');
        if (savedUsername) {
            loginButton.textContent = savedUsername;
            loginButton.style.border = 'none';
            loginButton.style.backgroundColor = 'transparent';
        }
    }
}); 